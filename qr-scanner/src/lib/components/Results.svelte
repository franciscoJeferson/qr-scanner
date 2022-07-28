<script lang="ts">
  import { fade } from "svelte/transition";
  import { AddManual } from "../../Ripples";
  import { AddManualButtonAnimation } from "../../ButtonAnimated";
  export let active: boolean;
  export let decodedData: string;
  export let onNewScan: () => void;

  let visible = true;
  let data, regex;
  $: if (active) {
    const urlExp =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
    regex = new RegExp(urlExp);
  }
  const shareData = async (dataResult) => {
    const shareData = {
      title: '',
      text: '',
      url: dataResult,
    }
    try {
    await navigator.share(shareData)
  } catch(err) {
    alert(`Error: ${err}`)
  }
  };
  const addAnimations = () => {
    const elements: any =
      document.querySelectorAll<HTMLElement>(".results__button")!;
    AddManual(elements);
    AddManualButtonAnimation(elements);
  };
</script>

<slot {decodedData}>
  {#if decodedData}
    <div class="results" transition:fade on:introend={() => addAnimations()}>
      <div class="results__data">
        {#if decodedData?.match(regex)}
          <a
            class="results__link"
            href={decodedData}
            target="_blank"
            rel="noopener noreferrer"
          >
            {decodedData}
          </a>
        {:else if decodedData}
          {decodedData};
        {/if}
      </div>
      <div class="results__button-container">
        <button
          type="button"
          class="results__button ripples button-animated"
          on:click={onNewScan}
        >
          New Scan
        </button>
        <button
          type="button"
          class="results__button ripples button-animated"
          on:click={() => shareData(decodedData)}>Open</button
        >
      </div>
    </div>
  {/if}
</slot>

<style>
  @media (max-width: 400px) {
    .results {
      width: 90%;
    }
  }
  .results {
    width: 100%;
    max-width: 400px;
    background-color: rgb(255, 255, 255);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin: auto;
    height: max-content;
    z-index: 1000;
    padding: 0.5em;
    border-radius: 1em;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  }

  .results__data {
    word-break: break-all;
    text-align: center;
    padding: 0.5em;
  }

  .results__button-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .results__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    cursor: pointer;
    width: 40%;
    border: 0;
    padding: 0.5em;
    color: rgb(255, 255, 255);
    background-color: rgb(153, 80, 173);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: border-radius linear 200ms;
    --rp-color: rgb(255, 255, 255, 0.2);
    --rp-transition: 200;
    --box-shadow-default: none;
    --border-radius-default: 1em;
    --box-shadow-after: none;
    --border-radius-after: 0.3em;
  }
  .results__link {
    color: rgb(153, 80, 173);
  }
  @media (prefers-color-scheme: dark) {
    .results {
      background-color: rgb(40, 40, 40);
      color: rgb(255, 255, 255);
    }
  }
</style>
