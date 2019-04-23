import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store'
import AlertCmp from './components/Alert.vue'
import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyB-jurKD9M-lJ9XwF3idEqfpsmfhX3NDK8",
      authDomain: "caixaagua-58739.firebaseapp.com",
      databaseURL: "https://caixaagua-58739.firebaseio.com",
      projectId: "caixaagua-58739",
      storageBucket: "caixaagua-58739.appspot.com",
      messagingSenderId: "102465101014"
  })
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        this.$store.dispatch('autoSignIn', user)
    }
})
  }
}).$mount('#app')
