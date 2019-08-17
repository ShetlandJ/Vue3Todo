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
export default {
    data() {
        return {
            pets: ["Bark Twain", "Chairman Meow", "Christopher Squawken"],
            chosenPet: ""
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
    },
    methods: {
        setChosenPet(pet) {
            this.chosenPet = pet;
        }
    }
};
</script>
<style scoped>
.done {
    text-decoration: line-through;
}
</style>