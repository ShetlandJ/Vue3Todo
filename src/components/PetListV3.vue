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
            <h2>{{petList.numberOfPetsString}}</h2>
        </v-list-item>
        <v-list-item v-for="(pet, index) in petList.pets" :key="index">
            <v-btn @click="setChosenPet(pet)">{{pet}}</v-btn>
        </v-list-item>
        <v-list-item>{{praisedPetString}}</v-list-item>
    </v-card>
</template>

<script>
import { computed, ref, reactive } from "@vue/composition-api";

export default {
    setup() {
        // Pet list
        const petList = reactive({
            pets: ["Bark Twain", "Chairman Meow", "Christopher Squawken"],
            numberOfPets: computed(() => petList.pets.length),
            numberOfPetsString: computed(() => `${petList.numberOfPets} pets.`)
        })

        // Pet addition
        let newPet = ref("");
        const addPet = () => {
            petList.pets = [...petList.pets, newPet.value];
            newPet.value = "";
        };

        // Pet actions
        let chosenPet = ref("");

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
            addPet,
            newPet,
            petList,
            praisedPetString,
            setChosenPet
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