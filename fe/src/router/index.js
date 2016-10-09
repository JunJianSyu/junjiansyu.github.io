import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Main from '../view/Main.vue'
import Svux from '../view/Svux.vue'
// Record module
import Record from '../view/Record/Base.vue'
import RecordIndex from '../view/Record/Index.vue'

Vue.use(Router)
const router = new Router()

router.map({
    '/': {
        component: Main
    },
    '/vux': {
        component: Svux
    },
    '/record': {
        component: Record,
        records: true,

        subRoutes: {
            '/': {
                component: RecordIndex
            }
        }
    }
})

router.alias({})

router.redirect({
    '*': '/'
})

export default router
