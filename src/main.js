import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Alert from './components/User/Alert.vue'
import Edit from './components/Edit.vue'
import Basket from './components/Basket.vue'
import Loading from './components/Loading.vue'

Vue.config.productionTip = false

Vue.component('app-alert', Alert)
Vue.component('product-edit', Edit)
Vue.component('game-basket', Basket)
Vue.component('loader', Loading)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyAJ2iPkQrLQhN_7KUzEDRjXK75CpY2dbc8",
      authDomain: "game-webshop-2020.firebaseapp.com",
      databaseURL: "https://game-webshop-2020.firebaseio.com",
      projectId: "game-webshop-2020",
      storageBucket: "game-webshop-2020.appspot.com",
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadProducts')
  },
}).$mount('#app')