<template>
  <h3>列表渲染</h3>
  <p v-for="item in names" :id="item">{{ item }}</p>
  <div v-for="(item, index) in result">
    <p>{{ item.title }}-{{ index }}</p>
    <img :src="item.avator" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      names: ["1", "2", "3"],
      result: [
        {
          id: 1,
          title: "this is test1",
          avator:
            "https://cn.bing.com/th?id=OVFT.ui98M3zSMfNpEaWBJSnhJS&w=186&h=88&c=7&rs=2&qlt=80&pid=PopNow",
        },
        {
          id: 2,
          title: "this is test2",
          avator:
            "https://cn.bing.com/th?id=OVFT.ui98M3zSMfNpEaWBJSnhJS&w=186&h=88&c=7&rs=2&qlt=80&pid=PopNow",
        },
        {
          id: 3,
          title: "this is test3",
          avator:
            "https://cn.bing.com/th?id=OVFT.ui98M3zSMfNpEaWBJSnhJS&w=186&h=88&c=7&rs=2&qlt=80&pid=PopNow",
        },
      ],
    };
  },
};
</script>