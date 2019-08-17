<template>
    <v-card>
        <v-list-item>
            <h2>{{numberOfPets}} pets.</h2>
        </v-list-item>
        <v-list-item v-for="(pet, index) in pets" :key="index">
            <v-btn @click="setChosenPet(pet)">{{pet}}</v-btn>
        </v-list-item>
        <v-list-item>{{praisedPetString}}</v-list-item>
    </v-card>
</template>

<script>
import { value, computed } from "vue-function-api";

export default {
    setup() {
        // Pet list
        const pets = value([
            "Bark Twain",
            "Chairman Meow",
            "Christopher Squawken"
        ]);

        const numberOfPets = computed(() => {
            return pets.value.length;
        });

        // Pet actions
        let chosenPet = value("");

        const setChosenPet = pet => {
            chosenPet.value = pet;
        };

        const praisedPetString = computed(() => {
            if (!chosenPet.value) {
                return "Select a pet!";
            }

            return `${chosenPet.value} is amazing!`;
        });

        return {
            numberOfPets,
            pets,
            praisedPetString,
            setChosenPet,
        };
    }
};
</script>
<style scoped>
.done {
    text-decoration: line-through;
}
</style>