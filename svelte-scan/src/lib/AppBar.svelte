<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { AddManualBtAnimatedButtons } from "../ButtonAnimated";
  import { AddManualRipples } from "../Ripples";

  const dispatch = createEventDispatcher();
  export let barCodeIcon: boolean = false;
  const turnBarQrCode = () => {
    dispatch("turnBarQrCode");
  };
  const toggleCamera = () => {
    dispatch("toggleCamera");
  };
  const onOpenGallery = () => {
    dispatch("onOpenGallery");
  };
</script>

<main>
  <div class="app-bar">
    <button
      class="app-bar__button app-bar__button--turn-qr-barcode ripples"
      on:click={turnBarQrCode}
    >
      {#if barCodeIcon}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <rect
            stroke="rgb(255, 255, 255)"
            fill="rgb(255, 255, 255)"
            x="336"
            y="336"
            width="80"
            height="80"
            rx="8"
            ry="8"
          />
          <rect
            stroke="rgb(255, 255, 255)"
            fill="rgb(255, 255, 255)"
            x="272"
            y="272"
            width="64"
            height="64"
            rx="8"
            ry="8"
          />
          <rect
            stroke="rgb(255, 255, 255)"
            fill="rgb(255, 255, 255)"
            x="416"
            y="416"
            width="64"
            height="64"
            rx="8"
            ry="8"
          />
          <rect
            stroke="rgb(255, 255, 255)"
            fill="rgb(255, 255, 255)"
            x="432"
            y="272"
            width="48"
            height="48"
            rx="8"
            ry="8"
          />
          <rect
            stroke="rgb(255, 255, 255)"
            fill="rgb(255, 255, 255)"
            x="272"
            y="432"
            width="48"
            height="48"
            rx="8"
            ry="8"
          />
          <rect
            stroke="rgb(255, 255, 255)"
            fill="rgb(255, 255, 255)"
            x="336"
            y="96"
            width="80"
            height="80"
            rx="8"
            ry="8"
          />
          <rect
            x="288"
            y="48"
            width="176"
            height="176"
            rx="16"
            ry="16"
            fill="none"
            stroke="rgb(255, 255, 255)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <rect x="96" y="96" width="80" height="80" rx="8" ry="8" />
          <rect
            x="48"
            y="48"
            width="176"
            height="176"
            rx="16"
            ry="16"
            fill="none"
            stroke="rgb(255, 255, 255)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <rect x="96" y="336" width="80" height="80" rx="8" ry="8" />
          <rect
            x="48"
            y="288"
            width="176"
            height="176"
            rx="16"
            ry="16"
            fill="none"
            stroke="rgb(255, 255, 255)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
      {/if}
      {#if !barCodeIcon}
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M384 400.33l35.13-.33A29 29 0 00448 371.13V140.87A29 29 0 00419.13 112l-35.13.33M128 112l-36.8.33c-15.88 0-27.2 13-27.2 28.87v230.27c0 15.87 11.32 28.86 27.2 28.86L128 400M384 192v128M320 160v192M256 176v160M192 160v192M128 192v128"
            fill="none"
            stroke="rgb(255, 255, 255)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
      {/if}
    </button>
    <button
      class="app-bar__button app-bar__button--turn-camera ripples"
      on:click={toggleCamera}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"
          fill="none"
          stroke="rgb(255, 255, 255)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke="rgb(255, 255, 255)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M124 158v-22h-24v22M335.76 285.22v-13.31a80 80 0 00-131-61.6M176 258.78v13.31a80 80 0 00130.73 61.8"
        />
        <path
          fill="none"
          stroke="rgb(255, 255, 255)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M196 272l-20-20-20 20M356 272l-20 20-20-20"
        />
      </svg>
    </button>
    <button
      class="app-bar__button app-bar__button--get-images-from-gallery ripples"
      on:click={onOpenGallery}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <rect
          x="48"
          y="80"
          width="416"
          height="352"
          rx="48"
          ry="48"
          fill="none"
          stroke="rgb(255, 255, 255)"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <circle
          cx="336"
          cy="176"
          r="32"
          fill="none"
          stroke="rgb(255, 255, 255)"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368"
          fill="none"
          stroke="rgb(255, 255, 255)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
    </button>
  </div>
</main>

<style lang="scss">
  .app-bar {
    max-width: 900px;
    width: 100%;
    height: 60px;
    position: fixed;
    background-color: rgba(var(--bg-color), 0.2);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    backdrop-filter: blur(2px);
    &__button {
      width: 50px;
      height: 50px;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--brd-radius);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      border: none;
      outline: none;
      font-size: calc(var(--fs-icon) + 0.3em);
      cursor: pointer;
      --rp-color: rgba(255, 255, 255, 0.2);
      --rp-transition: var(--v-rp-transition);
      & ion-icon {
        color: rgb(255, 255, 255);
      }
    }
  }
</style>
