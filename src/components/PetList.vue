<template>
    <div id="app">
        <v-app>
            <v-content>
                <v-container>
                    <v-layout row justify-center class="ma-5">
                        <v-flex xs12 sm8>
                                <v-switch
                                    v-model="v3"
                                    :label="`${v3 ? 'V3' : 'V2'}` "
                                />
                            <!-- <v-card>
                                <v-list-item v-for="(pet, index) in pets" :key="index">
                                    <v-btn @click="setChosenPet(pet)">{{pet}}</v-btn>
                                </v-list-item>
                            {{praisedPetString}}
                            </v-card> -->
                            <PetListV3 v-if="v3" />
                            <PetListV2 v-else />
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import { value, computed } from "vue-function-api";
import PetListV2 from './PetListV2';
import PetListV3 from './PetListV3';

export default {
    components: {
        PetListV2,
        PetListV3
    },
    setup() {
        const v3 = value(true);

        const pets = value([
            "Bark Twain",
            "Chairman Meow",
            "Christopher Squawken"
        ]);

        let chosenPet = value("");

        const setChosenPet = pet => {
            chosenPet.value = pet;
        };

        const praisedPetString = computed(() => {
            if (!chosenPet.value) {
                return 'Select a pet!';
            }

            return `${chosenPet.value} is amazing!`
        })

        return {
            pets,
            praisedPetString,
            setChosenPet,
            v3
        };
    }
};
</script>
<style scoped>
.done {
    text-decoration: line-through;
}
</style>