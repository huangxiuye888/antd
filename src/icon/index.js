import Vue from "vue"
import SvgIcon from "com/svg-icon.vue"
const req=require.context('./svg',false,/\.svg$/)
// keys获取当前目录下所有文件名
//执行遍历，每次都执行req方法
req.keys().map(req)
Vue.component('svg-icon',SvgIcon)