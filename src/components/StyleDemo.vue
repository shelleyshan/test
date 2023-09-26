<template>
  <p :style="{ color: activeColor }">Style绑定</p>
</template>

<script>
export default {
  data() {
    return {
      activeColor: "green",
    };
  },
};
</script>