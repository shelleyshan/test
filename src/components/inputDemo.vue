<template>
  <p>Message is:{{ message }}</p>
  <input v-model.lazy="message" placeholder="edit me" />
  <div>Checked names :{{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">Jack</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
  <div>Selected:{{ selected }}</div>
  <!-- <select v-model="selected" multiple>
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select> -->
  <select v-model="selected" multiple>
    <option v-for="(item, index) in options" :key="index" :value="item.value">
      {{ item.text }}
    </option>
  </select>
  <input ref="input" />
  <ul>
    <li v-for="item in options" ref="items" :key="item.value">
      {{ item.text }}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      checkedNames: [], //将多个复选框绑定到同一个数组或集合的值：将始终包含所有当前被选中的框的值
      selected: "",
      options: [
        { text: "A", value: 1 },
        { text: "B", value: 2 },
        { text: "C", value: 3 },
      ],
    };
  },
  mounted() {
    this.$refs.input.focus(); //只可以在组件挂载后才能访问模板引用
    this.$refs.input.value = this.$refs.items;
  },
};
</script>
