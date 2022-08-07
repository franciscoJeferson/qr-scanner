<script lang="ts">
import appBar from "./components/AppBar.vue";
import results from "./components/Results.vue";
import alert from "./components/Alert.vue";
export default {
  data: function () {
    return {
      isResult: false,
      result: "https://google.com",
      barCodeMode: false,
      cameraMode: "environment",
      config: { fps: 10, qrbox: { width: 300, height: 300 } },
      html5QrCode: "",
      alert: false,
      alertMsg: "",
      timeAlert: "",
      fileInput: "",
    };
  },
  methods: {
    async handleReader(mode: string) {
      // const html5QrCode: any = new Html5Qrcode("reader-area");
      const qrCodeSuccessCallback = async (decodedText: string) => {
        await this.html5QrCode.stop();
        this.result = decodedText;
        this.isResult = true;
      };
      const screenOrientation = window.screen.orientation.angle;
      if (this.barCodeMode && screenOrientation === 0) {
        this.barCodeMode = false;
        this.config.qrbox.width = 300;
        this.config.qrbox.height = 300;
      } else if (this.barCodeMode && screenOrientation === 90) {
        this.config.qrbox.width = 400;
        this.config.qrbox.height = 200;
      } else if (!this.barCodeMode) {
        this.config.qrbox.width = 300;
        this.config.qrbox.height = 300;
      }
      if (mode === "start") {
        this.html5QrCode.start(
          { facingMode: this.cameraMode },
          this.config,
          qrCodeSuccessCallback
        );
      } else if (mode === "restart") {
        await this.html5QrCode.stop();
        await this.html5QrCode.start(
          { facingMode: this.cameraMode },
          this.config,
          qrCodeSuccessCallback
        );
      }
    },
    turnQrBarCode() {
      const screenOrientation = window.screen.orientation.angle;
      if (screenOrientation === 90) {
        this.barCodeMode = !this.barCodeMode;
        this.handleReader("restart");
      }
    },
    turnCameraMode() {
      this.cameraMode === "environment"
        ? (this.cameraMode = "user")
        : (this.cameraMode = "environment");
      this.handleReader("restart");
    },
    startReader() {
      this.html5QrCode = "";
      this.html5QrCode = new Html5Qrcode("reader-area");
      this.handleReader("start");
      this.isResult = false;
      this.result = "";
    },
    async onOpenGallery() {
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
        event.target.remove()
        await this.html5QrCode.stop();
        this.html5QrCode
          .scanFile(imageFile, true)
          .then(async (decodedText: any) => {
            this.result = decodedText;
            this.isResult = true;
          })
          .catch(async () => {
            this.alert = true;
            this.alertMsg = "Error in reader image!";
            clearTimeout(this.timeAlert);
            this.timeAlert = setTimeout(() => {
              this.alert = false;
              this.alertMsg = "";
            }, 1500);
            this.isResult = false;
            this.result = "";
            this.handleReader("start");
          });
      });
    },
  },
  mounted() {
    this.html5QrCode = new Html5Qrcode("reader-area");
    this.fileInput =
      document.querySelector<HTMLInputElement>("#qr-input-file")!;
    this.handleReader("start");
    window.onorientationchange = () => {
      this.handleReader("restart");
    };
  },
  components: {
    AppBar: appBar,
    Results: results,
    Alert: alert,
  },
};
</script>
<template>
  <Transition>
    <Alert :propsMsg="alertMsg" v-if="alert" />
  </Transition>
  <div class="reader-container">
    <div id="reader-area" ref="ola"></div>
  </div>
  <AppBar
    @turnQrBarCode="turnQrBarCode"
    @turnCameraMode="turnCameraMode"
    @onOpenGallery="onOpenGallery"
    :propsBarCodeIcon="!barCodeMode"
  />
  <Results v-if="isResult" @startReader="startReader" :propsResult="result" />
</template>

<style lang="scss">
video {
  width: 100% !important;
}
.reader-container {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  &#reader-area {
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
}
</style>
