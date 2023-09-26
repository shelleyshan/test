
<template>
  <h3>侦听器</h3>
  <p>{{ message }}</p>
  <button @click="ChangeWord()">修改数据</button>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello",
    };
  },
  methods: {
    ChangeWord() {
      this.message = "World";
    },
  },
  watch: {
    //方法名要和数据名一致
    message(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
};
</script>