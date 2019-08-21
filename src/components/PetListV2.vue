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
export default {
    data() {
        return {
            pets: ["Bark Twain", "Chairman Meow", "Christopher Squawken"],
            chosenPet: "",
            newPet: ""
        };
    },
    computed: {
        praisedPetString() {
            if (!this.chosenPet) {
                return "Select a pet!";
            }

            return `${this.chosenPet} is amazing!`;
        },
        numberOfPets() {
            return this.pets.length;
        },
        numberOfPetsString() {
            return `${this.numberOfPets} pets.`
        }
    },
    methods: {
        setChosenPet(pet) {
            this.chosenPet = pet;
        },
        addPet() {
            this.pets = [...this.pets, this.newPet];
            this.newPet = "";
        }
    }
};
</script>
<style scoped>
.done {
    text-decoration: line-through;
}

.add-pet {
    margin: 5px !important;
}
</style>