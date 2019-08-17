<template>
    <v-app>
        <div class="text-center">
            <v-btn class="switcher" text large @click="route = 0">Todos</v-btn>
            <v-btn class="switcher" text large @click="route = 1">Notes</v-btn>
            <v-btn class="switcher" text large @click="route = 2">Pet List</v-btn>
        </div>

        <todo-list v-if="route === 0" />
        <notes v-if="route===1" />
        <pet-list v-if="route===2" />
    </v-app>
</template>

<script>
import useSeeder from "./hooks/useSeeder";
import { value } from "vue-function-api";

import TodoList from "./components/TodoList.vue";
import Notes from "./components/Notes.vue";
import PetList from "./components/PetList.vue";

export default {
    name: "App",
    components: {
        TodoList,
        Notes,
        PetList,
    },
    setup() {
        const route = value(0);
        const seeder = useSeeder();

        return {
            seeder,
            route
        };
    }
};
</script>

<style>
body {
    font-family: "Roboto, sans-serif";
}

.v-btn:not(.v-btn--round).v-size--large {
    font-size: 40px;
}
</style>
