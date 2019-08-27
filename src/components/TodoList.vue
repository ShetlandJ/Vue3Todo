<template>
    <div id="app">
        <v-app>
            <v-content>
                <v-container>
                    <v-alert type="success">
                        <p>
                            <strong>Todo list</strong> demonstrates the usage of hooks to import data that is relevant to this file. There is a todo hook, <code>useTodos</code>, which encapsulate all the logic that we would want to use with our Todo component, and exports it to this Todo component.
                        </p>

                        <p>
                            This component also demonstrates how the exported items from the hooks can work in conjunction with regular Vue 3 function api structures. It uses imported logic as well as component specific logic to achieve what we see below.
                        </p>
                    </v-alert>

                    <v-layout row justify-center class="ma-5">
                        <v-flex xs12 sm8>
                            <v-card>
                                <v-toolbar color="blue darken-4" dark>
                                    <v-icon></v-icon>
                                    <v-toolbar-title class="headline">Todo App V3</v-toolbar-title>

                                    <v-spacer></v-spacer>

                                    <v-btn icon>
                                        <v-icon>search</v-icon>
                                    </v-btn>
                                </v-toolbar>

                                <v-list two-line subheader>
                                    <v-container>
                                        <v-subheader class="headline">{{dateString}}</v-subheader>
                                        <v-spacer></v-spacer>
                                        <v-subheader>
                                            <p class="text-xs-right">
                                                <b>{{todos.length}}</b> Tasks
                                            </p>
                                        </v-subheader>

                                        <v-flex xs12>
                                            <v-text-field
                                                clearable
                                                v-model="newTodo"
                                                id="newTodo"
                                                name="newTodo"
                                                label="Type your task"
                                                @keyup.enter="addTodo"
                                            />
                                        </v-flex>
                                    </v-container>
                                    <v-subheader
                                        class="subheading"
                                        v-if="todos.length == 0"
                                    >You have 0 Tasks, add some</v-subheader>
                                    <v-subheader class="subheading" v-else>Your Tasks</v-subheader>
                                    <v-list>
                                        <v-list-item v-for="todo in todos" :key="todo.id">
                                            <v-list-item-avatar>
                                                <v-checkbox v-model="todo.done" />
                                            </v-list-item-avatar>

                                            <v-list-item-content>
                                                <v-list-item-title
                                                    :class="{done: todo.done}"
                                                    class="title"
                                                >{{capitalise(todo.title)}}</v-list-item-title>
                                            </v-list-item-content>

                                            <v-list-item-action v-if="todo.done">
                                                <v-btn
                                                    icon
                                                    ripple
                                                    color="red"
                                                    v-if="todo.done"
                                                    @click="removeTodo(todo.id)"
                                                >
                                                    <v-icon>close</v-icon>
                                                </v-btn>
                                            </v-list-item-action>
                                            <v-list-item-action v-else>
                                                <v-chip>{{dateString}}</v-chip>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import useTodos from "../hooks/useTodos";
import { computed } from '@vue/composition-api';

export default {
    setup() {
        const todoDay = () => {
            const date = new Date();
            const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];
            return days[date.getDay()];
        };

        const capitalise = value => {
            if (!value) return "";
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        };

        const day = todoDay();
        const date = new Date().getDate();
        const year = new Date().getFullYear();

        const { todos, addTodo, removeTodo, newTodo } = useTodos();

        const dateString = computed(() => {
            return `${date} ${day} ${year}`;
        });

        return {
            addTodo,
            capitalise,
            date,
            dateString,
            day,
            newTodo,
            removeTodo,
            todos,
            todoDay,
            year
        };
    }
};
</script>
<style scoped>
.done {
    text-decoration: line-through;
}
</style>