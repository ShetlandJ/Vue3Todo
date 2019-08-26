<template>
    <v-app>
        <v-content>
            <v-container>
                <v-alert type="success">
                    <p>
                        <strong>Cities</strong> demonstrates how props can be consumed by the setup method. It can be passed as simply as <code>setup(props)</code> but best practices dictate that object destructuring be used instead: <code>setup({ city })</code>.
                    </p>
                </v-alert>

                <v-card class="mx-auto" max-width="400" tile>
                    <v-list-item three-line v-for="city in data.cities" :key="city.id">
                        <cities-item :city="city" />
                    </v-list-item>
                </v-card>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import { reactive } from "@vue/composition-api";
import CitiesItem from "./CitiesItem";

export default {
    components: {
        CitiesItem
    },
    setup() {
        const data = reactive({
            cities: [
                {
                    id: 1,
                    name: "Barcelona",
                    country: "Spain",
                    visited: true
                },
                {
                    id: 2,
                    name: "Berlin",
                    country: "Germany",
                    visited: true
                },
                {
                    id: 3,
                    name: "Addis Ababa",
                    country: "Ethiopia",
                    visited: false
                }
            ]
        });

        return {
            data
        };
    }
};
</script>

<style>
</style>