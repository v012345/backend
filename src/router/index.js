import Vue from 'vue';
import Router from "vue-router";
Vue.use(Router) //给Vue安装vue-router插件
import HelloWorld from "../components/HelloWorld/HelloWorld.vue" //引入要用的组件
export default new Router({
    routes: [
        {
            path: "/home",//路径
            component: HelloWorld//组件
        }
    ]
})