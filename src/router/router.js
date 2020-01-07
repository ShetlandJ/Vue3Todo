import Vue from 'vue'
import Home from '../components/Home.vue'
import StatefulFunctional from '../components/StatefulFunctional.vue'


import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'sf',
            path: '/sf',
            component: StatefulFunctional
        },
    ]
})
