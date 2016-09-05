import Vue from 'vue'
// import VueResource from 'vue-resource'
import {sync} from 'vuex-router-sync'
import store from './store'
import router from './router'
import filters from './filter'
import App from './App'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// Vue.use(VueResource)

sync(store, router)
router.start(App, 'app')
