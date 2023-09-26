<template>
  <h3>内联事件处理器</h3>
  <button @click="addCount">Add</button>
  <p>{{ count }}</p>
</template>
  <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  //所有的方法或者函数都放在这里
  methods: {
    addCount() {
      //读取到data里面的数据的方案：this.count
      this.count++;
    },
  },
};
</script>