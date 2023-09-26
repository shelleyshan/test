
/**
 * 每个Vue应用都是通过createApp函数创建一个新的应用实例
 */
import { createApp } from 'vue'
/**
 * 从一个单文件组件中导入根组件
 */
import App from './App.vue'

/**
 * 应用实例必须在调用了.mount方法后才会渲染出来，应用根组件的内容将会被渲染在容器元素里面
 * 在低层级制中， Vue会将模板编译成高度优化的JavaScript代码 
 */
createApp(App).mount('#app')
