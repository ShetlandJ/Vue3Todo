<template>
    <div id="app">
        <v-app>
            <v-content>
                <v-container>
                    <v-alert type="success">
                        <p>
                            <strong>Petlist</strong> shows the benefits of Vue 3's approach in terms of component composition. Vue 2.x's Object structure helpfully portions up your javascript into objects such as
                            <code>data</code>
                            <code>computed</code> etc. This is helpful for keeping similar data together in your Vue and for consistency in the codebase.
                        </p>

                        <p>
                            But this type of structure can cause problems with large components: Eslint, for example, auto-formats your data object at the top of the Vue instance, and methods at the bottom, with
                            <code>computed</code>,
                            <code>created</code>,
                            <code>watch</code> etc all between them. Methods commonly mutate data properties, so having them apart doesn't make a lot of sense.
                        </p>

                        <p>With Vue 3, we are not bound to store by that structure. We can have relevant data, methods and computed properties sitting adjacent, keeping relevant logic together.</p>
                    </v-alert>
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
import { ref, computed } from "@vue/composition-api";
import PetListV2 from "./PetListV2";
import PetListV3 from "./PetListV3";

export default {
    components: {
        PetListV2,
        PetListV3,
    },
    setup() {
        const v3 = ref(true);
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