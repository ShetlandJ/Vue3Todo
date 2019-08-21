import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: 1,
                title: "This is long, I hope that it gets abbreviated",
                done: false
            },
            {
                id: 2,
                title: "Scary Vue 3 presentation",
                done: false
            },
            {
                id: 3,
                title: "Find the good bits in Vue 3",
                done: true
            }
        ],
    },
    actions: {
        ADD_TODO({ commit }, payload) {
            commit('SET_TODO', payload);
        },
        REMOVE_TODO({ commit }, payload) {
            commit('DELETE_TODO', payload)
        },
    },
    mutations: {
        SET_TODO(state, payload) {
            state.todos = [...state.todos, payload];
        },
        DELETE_TODO(state, payload) {
            const index = state.todos.findIndex(todo => todo.id === payload);
            state.todos.splice(index, 1);
        }
    },
    getters: {
        todos(state) {
            return state.todos
        }
    },
})