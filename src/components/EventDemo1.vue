<template>
  <h3>内联事件处理器</h3>
  <button @click="count++">Add</button>
  <p>{{ count }}</p>
  <div>
    <p>搜索：</p>
    <input type="text" v-model="search" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      search: "",
    };
  },
  watch: {
    search(newValue, oldValue) {
      this.$emit("searchEvent", newValue);
    },
  },
};
</script>