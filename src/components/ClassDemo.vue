<template>
  <p :class="{ active: isactive, 'text-danger': hasError }">Class样式绑定</p>
  <p :class="classObject">Class样式绑定</p>
  <p :class="[arrActive, arrHasError]">Class样式绑定</p>
  <p :class="['active', 'text-danger']">Class样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      isactive: true,
      hasError: true,
      classObject: {
        active: true,
        "text-danger": true,
      },
      arrActive: "active",
      arrHasError: "text-danger",
    };
  },
};
</script>
<style scoped>
.active {
  font-size: 30px;
}
.text-danger {
  color: red;
}
</style>