<template>
  <h3>内联事件处理器</h3>
  <button @click="addCount">Add</button>
  <p
    @click="getItemName(item, $event)"
    v-for="(item, index) in names"
    :key="index"
  >
    {{ item }}
  </p>
</template>
  <script>
export default {
  data() {
    return {
      count: 0,
      names: ["lily", "shelley", "shirley"],
    };
  },
 
  //所有的方法或者函数都放在这里
  methods: {
    //event对象
    addCount(e) {
      //vue中的event对象，就是原生JS的Event对象
      e.target.innerHTML = "Add" + this.count;
      //读取到data里面的数据的方案：this.count
      this.count++;
    },
    getItemName(name, e) {
      alert(name);
    },
  },
};
</script>