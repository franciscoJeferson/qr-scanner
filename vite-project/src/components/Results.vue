<script lang="ts">
import Alert from "@/components/Alert.vue";
import { AddManual } from "./Ripples";
import { AddManualBtAnim } from "./ButtonAnimated";
import { Component, Vue } from 'vue-property-decorator'
type Data = {
  result: { type: StringConstructor; required: boolean; };
  alert: Boolean;
  alertMsg: String;
  timeAlert: any;
}
@Component({
  name: 'Results',
  components: {
    Alert,
  }
})
export default class Results {
  // props: {
  //   propsResult: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // emits: ["startReader"],
  // data(): Data {
  //   return {
  //     result: this.props.propsResult,
  //     alert: false,
  //     alertMsg: "",
  //     timeAlert: '',
  //   };
  // },
  // methods: {
  //   onCopy(): any {
  //     console.log(this)
  //     this.alertMsg = "Copied!";
  //     navigator.clipboard.writeText(this.result);
  //     clearTimeout(this.timeAlert);
  //     this.timeAlert = setTimeout(() => {
  //       this.alert = false;
  //       this.alertMsg = "";
  //     }, 1500);
  //   },
  //   async onShare() {
  //     const shareData = {
  //       title: "",
  //       text: this.result,
  //       url: "",
  //     };
  //     try {
  //       await navigator.share(shareData);
  //     } catch (err) {
  //       this.alert = true;
  //       this.alertMsg = "Error in share content!";
  //       clearTimeout(this.timeAlert);
  //       this.timeAlert = setTimeout(() => {
  //         this.alert = false;
  //         this.alertMsg = "";
  //       }, 1500);
  //     }
  //   },
  // },
  // mounted() {
  //   const ripples: any = document.querySelectorAll<HTMLElement>(".ripples")!;
  //   const buttonsAnimateds: any =
  //     document.querySelectorAll<HTMLElement>(".button-animated")!;
  //   AddManual(ripples);
  //   AddManualBtAnim(buttonsAnimateds);
  // },
  // components: {
  //   Alert: alert,
  // },
};
</script>

<template>
  <Transition>
    <Alert :propsMsg="alertMsg" v-if="alert" />
  </Transition>
  <div class="results-overlay"></div>
  <div class="results-container">
    <div class="results-container__header">
      <p class="results-container__header__result">
        {{ result }}
      </p>
      <div class="results-container__header__controls">
        <button
          class="results-container__header__controls__button ripples"
          @click="onCopy()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <rect
              x="128"
              y="128"
              width="336"
              height="336"
              rx="57"
              ry="57"
              fill="none"
              stroke="var(--text-color)"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
              fill="none"
              stroke="var(--text-color)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
        </button>
        <button
          class="results-container__header__controls__button ripples"
          @click="onShare()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <circle
              cx="128"
              cy="256"
              r="48"
              fill="none"
              stroke="var(--text-color)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <circle
              cx="384"
              cy="112"
              r="48"
              fill="none"
              stroke="var(--text-color)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <circle
              cx="384"
              cy="400"
              r="48"
              fill="none"
              stroke="var(--text-color)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="var(--text-color)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="results-container__options">
      <button
        class="results-container__options__button ripples button-animated"
        @click="$emit('startReader')"
      >
        New scan
      </button>
      <a
        :href="result"
        target="_blank"
        class="results-container__options__button ripples button-animated"
      >
        Open with
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.results-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.results-container {
  max-width: 500px;
  min-height: 100px;
  width: 95%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0.5em;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(var(--bg-color));
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: var(--brd-radius);
  padding: 0.5em;
  &__header {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    &__result {
      font-size: var(--fs);
      word-break: break-all;
      width: calc(100% - 100px);
      color: var(--text-color);
    }
    &__controls {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100px;
      &__button {
        width: 45px;
        height: 45px;
        background-color: rgb(var(--bg-color));
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
        cursor: pointer;
        --rp-color: var(--v-rp-color);
        --rp-transition: var(--v-rp-transition);
      }
    }
  }
  &__options {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    &__button {
      width: 45%;
      height: max-content;
      font-size: var(--fs);
      background-color: var(--bg-primary);
      color: rgb(255, 255, 255);
      padding: 0.5em;
      border: none;
      outline: none;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--brd-radius);
      transition: border-radius 200ms linear;
      --rp-color: rgba(255, 255, 255, 0.2);
      --rp-transition: var(--v-rp-transition);
      --box-shadow-default: none;
      --border-radius-default: var(--brd-radius);
      --box-shadow-after: none;
      --border-radius-after: 0.3em;
    }
  }
}
</style>
