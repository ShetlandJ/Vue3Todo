<template>
    <v-app>
        <div class="text-center">
            <v-btn class="switcher" :to="{ name: 'home'}" text large>Home</v-btn>
            <v-btn class="switcher" :to="{ name: 'todo'}" text large>Todos</v-btn>
            <v-btn class="switcher" :to="{ name: 'notes'}" text large>Notes</v-btn>
            <v-btn class="switcher" :to="{ name: 'petlist'}" text large>Pet List</v-btn>
        </div>

        <router-view>
            <home />
        </router-view>
    </v-app>
</template>

<script>
import Home from "./components/Home.vue";

export default {
    name: "App",
    components: {
        Home
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
