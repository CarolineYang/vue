import Vue from 'vue'
import App from './App.vue'
import VueRouuter from 'vue-router'
import createRouter from './config/router'
import createStore from './store/store'
Vue.config.productionTip = false;
Vue.use(VueRouuter);
const router=createRouter();
router.beforeEach((to,from,next)=>{
  // console.log('beforeEach',to,from)
  next()
})
const store = createStore()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
