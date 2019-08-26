import { onCreated } from "@vue/composition-api";
import store from '../store/index';

function todoSetup() {
    const todos = [
        {
            id: 1,
            title: "This is a long title, hope it gets abbreviated",
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
    ];

    todos.forEach(todo => {
        store.dispatch("ADD_TODO", todo);
    });
}

export default function useTodos() {
    onCreated(() => {
        todoSetup();
    });
}