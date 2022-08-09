<script lang="ts">
  type ConfigScan = {
    fps: number;
    qrbox: {
      width: number;
      height: number;
    };
    rememberLastUsedCamera: boolean;
  };
  import { onMount } from "svelte";
  import { Html5Qrcode } from "html5-qrcode";
  import Results from "./lib/Results.svelte";
  import AppBar from "./lib/AppBar.svelte";
  import Alert from "./lib/Alert.svelte";

  let html5QrCode: any = "";
  let cameraMode: string = "environment";
  const config: ConfigScan = {
    fps: 10,
    qrbox: { width: 300, height: 300 },
    rememberLastUsedCamera: true,
  };
  let barCodeMode: boolean = false;
  export let result: string = "";
  export let isResult: boolean = false;
  export let msgAlert: string = "";
  export let openAlert: boolean = false;
  export let setTime: any = "";
  export const timeAlert: number = 900;

  const handleReader = async (mode: string) => {
    const qrCodeSuccessCallback = async (decodedText: string) => {
      await html5QrCode.stop();
      result = decodedText;
      isResult = true;
    };
    const screenOrientation = window.screen.orientation.angle;
    if (barCodeMode && screenOrientation === 0) {
      barCodeMode = false;
      config.qrbox.width = 300;
      config.qrbox.height = 300;
    } else if (barCodeMode && screenOrientation === 90) {
      config.qrbox.width = 400;
      config.qrbox.height = 200;
    } else if (!barCodeMode) {
      config.qrbox.width = 300;
      config.qrbox.height = 300;
    }
    if (window.screen.orientation.angle === 90) {
      if (window.innerWidth <= 500) {
        barCodeMode = true;
        config.qrbox.width = 400;
        config.qrbox.height = 200;
      }
    }
    if (mode === "start") {
      html5QrCode.start(
        {
          facingMode: cameraMode,
        },
        config,
        qrCodeSuccessCallback
      );
    } else if (mode === "restart") {
      await html5QrCode.stop();
      await html5QrCode.start(
        {
          facingMode: cameraMode,
        },
        config,
        qrCodeSuccessCallback
      );
    }
  };
  const toggleCamera = () => {
    cameraMode === "environment"
      ? (cameraMode = "user")
      : (cameraMode = "environment");
    handleReader("restart");
  };
  const turnBarQrCode = () => {
    const screenOrientation = window.screen.orientation.angle;
    if (screenOrientation === 90) {
      barCodeMode = !barCodeMode;
      handleReader("restart");
    }
  };
  const openGallery = async () => {
    const fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("id", "qr-input-file");
    fileInput.setAttribute("accept", "image/*");
    fileInput.setAttribute("hidden", "true");
    document.body.appendChild(fileInput);
    fileInput.click();
    fileInput.addEventListener("change", async (event: any) => {
      if (event.target.files.length == 0) {
        return;
      }
      const imageFile = event.target.files[0];
      event.target.remove();
      await html5QrCode.stop();
      html5QrCode
        .scanFile(imageFile, true)
        .then(async (decodedText: any) => {
          result = decodedText;
          isResult = true;
        })
        .catch(async () => {
          openAlert = true;
          msgAlert = "Error in scan this file!";
          clearTimeout(setTime);
          setTime = setTimeout(() => {
            openAlert = false;
            msgAlert = "";
          }, timeAlert);
          isResult = false;
          result = "";
          handleReader("start");
        });
    });
  };
  const restartScan = () => {
    handleReader("start");
    isResult = false;
    result = "";
  };
  onMount(() => {
    html5QrCode = new Html5Qrcode("reader");
    handleReader("start");
    window.onorientationchange = () => {
      handleReader("restart");
    };
  });
</script>

<main>
  <Alert msg={msgAlert} {openAlert} />
  <div class="reader-container">
    <div id="reader" />
  </div>
  <AppBar
    on:turnBarQrCode={turnBarQrCode}
    on:toggleCamera={toggleCamera}
    on:onOpenGallery={openGallery}
    barCodeIcon={barCodeMode}
  />
  <Results on:restartScan={restartScan} {isResult} {result} />
</main>

<style lang="scss">
  .reader-container {
    width: 100%;
    height: 100%;
    max-width: 900px;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
</style>
