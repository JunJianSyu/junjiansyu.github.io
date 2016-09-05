import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Main from '../view/Main.vue'

Vue.use(Router)
const router = new Router()

router.map({
    '/': {
        component: Main
    }
})

router.redirect({
    '*': '/'
})

export default router
