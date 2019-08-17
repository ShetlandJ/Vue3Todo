<template>
    <v-app>
        <div class="text-center">
            <v-btn class="switcher" text large @click="route = 0">Todos</v-btn>
            <v-btn class="switcher" text large @click="route = 1">Notes</v-btn>
        </div>

        <complex v-if="route === 0" />
        <notes v-else />
    </v-app>
</template>

<script>
import useSeeder from './hooks/useSeeder';
import { value } from 'vue-function-api';

import Complex from "./components/Complex.vue";
import Notes from "./components/Notes.vue";

export default {
    name: "App",
    components: {
        Complex,
        Notes,
    },
    setup() {
        const route = value(0)
        const seeder = useSeeder()

        return {
            seeder,
            route,
        }
    },
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
