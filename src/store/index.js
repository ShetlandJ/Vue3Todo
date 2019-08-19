import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
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