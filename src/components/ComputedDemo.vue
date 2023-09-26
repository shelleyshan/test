<template>
  <h3>{{ itdemo.name }}</h3>
  <p>{{ itDemoContent }}</p>
</template>
<script>
export default {
  data() {
    return {
      itdemo: {
        name: "it",
        content: ["前端", "Java", "python"],
      },
    };
  },
  //计算属性
  computed: {
    itDemoContent() {
      return this.itdemo.content.length > 0 ? "yes" : "no";
    },
  },
  //放函数或者方法
  methods: {
    itDemoContent() {
      return this.itdemo.content.length > 0 ? "yes" : "no";
    },
  },
};
</script>