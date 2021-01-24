import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import createRouter from './config/router'
import createStore from './store/store'
import subWatch from './subWatch/index'
import Tablesa from "./utils/table";
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Tablesa);
console.log(subWatch)
const router=createRouter();
const store = createStore();
// //导航钩子
// router.beforeEach((to,from,next)=>{
//   // console.log('beforeEach',to,from)
//   next()
// });
// //注册vuex模块
// store.registerModule('c',{
//   state:{
//     text:'c'
//   }
// });
// store.unregisterModule('c');
// //监控state值的变化第一个参数是函数，第二是y也是函数，讲的是改变之后的回调函数
// store.watch((state)=>{
//   return state.count+1
// },(newCounte)=>{
//   console.log('new ',newCounte)
// });
// //订阅mutations变化的 但凡调用mutations之后的回调函数
// store.subscribe((mutation,state)=>{
//   console.log(mutation.type,mutation.payload,state.count)
// });
// //订阅监视action变化的 但凡调用mutations之后的回调函数
// store.subscribeAction((action,state)=>{
//   console.log(action.type,action.payload,state.count)
// });
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
