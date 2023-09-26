<template>
  <h3>条件渲染</h3>
  <div v-if="flag">你能看见我么</div>
  <div v-else>nanihaishikankanwoba</div>
  <div v-show="flag">你能看见我么</div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
};
</script>
