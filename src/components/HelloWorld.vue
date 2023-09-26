<template>
  <div :class="msg" :id="dynamicId">{{ msg }}</div>
  <button v-bind:disabled="isDisabled">Test</button>
  <div v-bind="objectOfAttrs">ceshi</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "active",
      dynamicId: "appID",
      isDisabled: false,
      objectOfAttrs: {
        class: "appClass",
        id: "appid",
      },
    };
  },
};
</script>

