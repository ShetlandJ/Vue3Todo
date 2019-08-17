import { computed, value } from 'vue-function-api';
import store from '../store/index';

// function todoSetup() {
//     const todos = [
//         {
//             id: 1,
//             title: "This is a long title, hope it gets abbreviated",
//             done: false
//         },
//         {
//             id: 2,
//             title: "Scary Vue 3 presentation",
//             done: false
//         },
//         {
//             id: 3,
//             title: "Find the good bits in Vue 3",
//             done: true
//         }
//     ];

//     todos.forEach(todo => {
//         store.dispatch("ADD_TODO", todo);
//     });
// }

export default function useTodos() {
    // onCreated(() => {
    //     todoSetup();
    // });

    const newTodo = value('');
    const todos = computed(() => store.getters['todos']);

    const addTodo = () => {
        var value = newTodo.value && newTodo.value.trim();
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
        todos,
        addTodo,
        removeTodo,
        newTodo
    };
}
