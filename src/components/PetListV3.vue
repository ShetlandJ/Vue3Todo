<template>
    <v-card>
        <v-flex xs12 class="add-pet">
            <v-text-field
                clearable
                v-model="newPet"
                id="newPet"
                name="newPet"
                label="Adopt a new pet!"
                @keyup.enter="addPet"
            />
        </v-flex>
        <v-list-item>
            <h2>{{numberOfPetsString}}</h2>
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

        const numberOfPetsString = computed(() => {
            return `${numberOfPets.value} pets.`
        })

        // Pet addition
        const newPet = value("");
        const addPet = () => {
            pets.value = [...pets.value, newPet.value];
            newPet.value = "";
        }

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
            newPet,
            addPet,
            numberOfPetsString
        };
    }
};
</script>
<style scoped>
.done {
    text-decoration: line-through;
}

.add-pet {
    margin: 5px;
}
</style>