
<template>
    <v-card>
        <h2>{{numberOfPets}} pets.</h2>
        <v-list-item v-for="(pet, index) in pets" :key="index">
            <v-btn @click="setChosenPet(pet)">{{pet}}</v-btn>
        </v-list-item>
        {{praisedPetString}}
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            v3: false,
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