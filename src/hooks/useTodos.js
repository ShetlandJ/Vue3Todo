import { ref, computed } from "@vue/composition-api";
import store from '../store/index';

export default function useTodos() {

    const newTodo = ref('');
    const todos = computed(() => store.getters['todos']);

    const addTodo = () => {
        const value = newTodo.value && newTodo.value.trim();
        if (!value) {
            return;
        }

        const payload = {
            title: value,
            done: false
        }

        store.dispatch('ADD_TODO', payload)
        newTodo.value = '';
    }

    const removeTodo = (id) => {
        store.dispatch('REMOVE_TODO', id)
    }

    return {
        addTodo,
        newTodo,
        removeTodo,
        todos
    };
}
