import Vue from 'vue'
import Home from '../components/Home.vue'
import TodoList from '../components/TodoList.vue'
import Notes from '../components/Notes.vue'
import PetList from '../components/PetList.vue'
import Width from '../components/Width.vue';
import Cities from '../components/Cities.vue';

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
            name: 'todo',
            path: '/todo',
            component: TodoList
        },
        {
            name: 'notes',
            path: '/notes',
            component: Notes
        },
        {
            name: 'petlist',
            path: '/petlist',
            component: PetList
        },
        {
            name: 'width',
            path: "/width",
            component: Width
        },
        {
            name: 'cities',
            path: 'cities',
            component: Cities
        }
    ]
})
