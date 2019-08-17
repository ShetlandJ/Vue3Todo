<template>
    <div id="app">
        <v-app>
            <v-content>
                <v-container>
                    <v-layout row justify-center class="ma-5">
                        <v-flex xs12 sm8>
                            <v-switch v-model="v3" :label="toggleLabel" />
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
import PetListV2 from "./PetListV2";
import PetListV3 from "./PetListV3";

export default {
    components: {
        PetListV2,
        PetListV3
    },
    setup() {
        const v3 = value(true);
        const toggleLabel = computed(() => {
            if (v3.value) {
                return "Vue 3 function api";
            }

            return "Vue 2 object api";
        });

        return {
            toggleLabel,
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