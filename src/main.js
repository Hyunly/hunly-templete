import Vue from 'vue';

import App from './App.vue'

new Vue({
    el: '#app',
    render: (h) => h(App)
})

/**
 * 添加热更新代码
 * 如果module.hot 存在，调用`module.hot.accept`方法，该方法传入一个模块的地址。
 * 该模块就是入口文件对应的模块。
 * 如果这个模块中的任何代码改变了，webpack会重新更新这块的代码，进而让页面展示最新的内容。
 * 该模块只是针对js的更改。
 */
if(module.hot) {
    module.hot.accept('./main.js')
}
