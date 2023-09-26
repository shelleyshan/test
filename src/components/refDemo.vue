<template>
  <div ref="container" class="container">容器</div>
  <input type="text" ref="username" />
  <button @click="getElementHandle">获取元素</button>
</template>
<script>
/**
 * 内容改变：{{模板语法}}
 * 属性改变：v-bind：指令
 * 事件：v-on：click
 * 
 * 如果没有特殊的需求，不要操作DOM
 * 模板引用:获取dom
 */
export default {
  data() {
    return {
      content: "内容",
    };
  },
  methods: {
    getElementHandle() {
      //innerHTML 原生JS属性
      console.log((this.$refs.container.innerHTML = "hhhhh")); //此时获取的是div元素本身
      console.log(this.$refs.username.value);
    },
  },
};
</script>