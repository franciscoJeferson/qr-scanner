<script lang="ts">
import Options from "vue-class-component/lib/declarations';
@Options
export default class Alert extends Vue{
  // props: {
  //   propsMsg: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // data(): any {
  //   return {
  //     msg: this.props.propsMsg,
  //   };
  // },
};
</script>
<template>
  <div class="alert">{{ msg }}</div>
</template>
<style lang="scss">
.alert {
  width: 100%;
  height: max-content;
  word-break: break-all;
  max-width: 500px;
  display: flex;
  position: fixed;
  left: 50%;
  bottom: 0.5em;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  background-color: var(--bg-alert);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: var(--brd-radius);
  padding: 0.5em;
  z-index: 3;
  color: var(--text-color);
}
</style>
