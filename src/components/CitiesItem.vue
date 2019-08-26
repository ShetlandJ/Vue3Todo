<template>
    <v-list-item-content ref="city-item">
        <v-list-item-title>City: {{name}}</v-list-item-title>
        <v-list-item-subtitle>Country: {{country}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{visitedString}}</v-list-item-subtitle>
    </v-list-item-content>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
    props: {
        city: {
            type: Object,
            required: true
        }
    },
    setup({ city }) {
        const visitedString = computed(() => {
            return city.visited ? "Visited" : "Not visited yet";
        });

        return {
            name: city.name,
            country: city.country,
            visited: city.visited,
            visitedString
        };
    }
};
</script>

<style>
</style>