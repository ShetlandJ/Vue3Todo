<template>
    <v-content>
        <v-container>
            <v-layout row justify-center class="ma-5">
                <div class="my-div" :style="{backgroundColor: divStyle}">{{windowWidth}}px</div>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import useBackgroundColour from "../hooks/useBackgroundColour.js";
import useWidth from "../hooks/useWidth.js";

import { computed } from "vue-function-api";

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
            backgroundColour,
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