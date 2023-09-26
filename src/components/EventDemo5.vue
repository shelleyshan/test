
<template>
  <h3>数组变化侦测</h3>
  <p v-for="(item, index) of names" :key="index">{{ item }}</p>
  <button @click="addName">click</button>
</template>
<script>
export default {
  data() {
    return {
      names: ["Lily", "Darwin", "Coach"],
    };
  },
  methods: {
    addName() {
      //   this.names.push("zhangsan");
      this.names = this.names.concat(["lisi"]);
    },
  },
};
</script>
