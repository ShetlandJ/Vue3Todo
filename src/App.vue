<template>
    <v-app>
        <div>
            <v-toolbar>
                <v-toolbar-title>Vue 3 Examples</v-toolbar-title>

                <div class="flex-grow-1"></div>

                <v-toolbar-items>
                    <v-btn :to="{ name: 'home'}" text>Home</v-btn>
                    <v-btn :to="{ name: 'todo'}" text>Todos</v-btn>
                    <v-btn :to="{ name: 'notes'}" text>Notes</v-btn>
                    <v-btn :to="{ name: 'petlist'}" text>Pet List</v-btn>
                    <v-btn :to="{ name: 'width'}" text>Width</v-btn>
                    <v-btn :to="{ name: 'cities'}" text>Cities</v-btn>
                </v-toolbar-items>
            </v-toolbar>
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
