import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


//import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin)

createApp(App).use(router).mount('#app')
