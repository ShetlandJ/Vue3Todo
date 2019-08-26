<template>
    <v-card class="mx-auto" max-width="400" tile>
        <v-list-item three-line v-for="city in data.cities" :key="city.id">
            <props-child :city="city" />
        </v-list-item>
    </v-card>
</template>

<script>
import { reactive } from '@vue/composition-api';
import PropsChild from './PropsChild';

export default {
    components: {
        PropsChild
    },
    setup() {
        const data = reactive({
            cities: [
                {
                    id: 1,
                    name: 'Barcelona',
                    country: "Spain",
                    visited: true
                },
                {
                    id: 2,
                    name: 'Berlin',
                    country: "Germany",
                    visited: true
                },
                {
                    id: 3,
                    name: 'Addis Ababa',
                    country: "Ethiopia",
                    visited: false
                },
            ]
        })

        return {
            data
        }
    }
};
</script>

<style>
</style>