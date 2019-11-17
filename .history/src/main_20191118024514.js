import Vue from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'

import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueSidebarMenu)
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]  
}
)

new Vue({
  render: h => h(App),
}).$mount('#app')
