import Vue from 'vue'
import App from './App.vue'
import router from "@/routes/router";

Vue.config.productionTip = false;



/* Authentication */
function isUserAuthenticated() {
  return false
}

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !isUserAuthenticated()) {
    next({name: 'login', query: {"next": to.name}})
  }
  else next()

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
