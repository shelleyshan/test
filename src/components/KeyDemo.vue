<template>
  <h3>Kye属性添加到v-for中</h3>
  <p v-for="(item, index) in result" :key="item.id">{{ item }}</p>
</template>
<script>
export default {
  data() {
    return {
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