<template>
    <v-content>
        <v-container>
            <v-alert type="success">
                <p>
                    <strong>Width</strong> demonstrates one of the key flexibility improvements offered by the hooks approach. The page width is produced in one hook, and consumed by a second hook via this component.
                </p>

                <p>There is no way to pass data between mixins under the Vue 2.x API. Try making the window smaller and freshing the page. Less than 500px and the div will be green, between 500 and 800, it'll be orange and above that it'll be red</p>
            </v-alert>
            <v-layout row justify-center class="ma-5">
                <div class="my-div" :style="{backgroundColor: divStyle}">
                    <v-container bg fill-height grid-list-md text-xs-center>
                        <v-layout row wrap align-center justify-center>
                            <v-flex>
                                <h2>{{windowWidth}}px</h2>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </div>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import useWidth from "../hooks/useWidth.js";
import useBackgroundColour from "../hooks/useBackgroundColour.js";
import { computed } from "@vue/composition-api";

export default {
    setup() {
        // Passing data to another hook
        const { windowWidth } = useWidth();
        const { backgroundColour } = useBackgroundColour(windowWidth);

        const divStyle = computed(() => {
            return backgroundColour.value;
        });

        return {
            windowWidth,
            divStyle
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

.my-div {
    height: 200px;
    width: 200px;
    background-color: yellowgreen;
}
</style>