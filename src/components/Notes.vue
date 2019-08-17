<template>
    <div id="app">
        <v-app>
            <v-content>
                <v-container>
                    <v-layout row justify-center class="ma-5">
                        <v-flex xs12 sm8>
                            <v-card>
                                <v-textarea
                                outlined
                                    name="input-7-1"
                                    v-model="newTodo"
                                    label="Enter a note..."
                                ></v-textarea>
                                        <v-btn
                                        style="margin-right: 10px"
                                        @click="addTodo"
                                        >Set a todo</v-btn>
                                        <v-btn>Save</v-btn>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import useTodos from "../hooks/useTodos";
import { computed, value } from "vue-function-api";

export default {
    setup() {
        const { addTodo, newTodo } = useTodos();

// const todoDay = () => {
        //     var date = new Date();
        //     var days = [
        //         "Sunday",
        //         "Monday",
        //         "Tuesday",
        //         "Wednesday",
        //         "Thursday",
        //         "Friday",
        //         "Saturday"
        //     ];
        //     return days[date.getDay()];
        // };

        // const capitalise = value => {
        //     if (!value) return "";
        //     value = value.toString();
        //     return value.charAt(0).toUpperCase() + value.slice(1);
        // };

        // const day = todoDay();
        // const date = new Date().getDate();
        // const year = new Date().getFullYear();

        // const dateString = computed(() => {
        //     return `${date} ${day} ${year}`;
        // });

        return {
            addTodo,
            newTodo,
        };
    }
};
</script>
<style scoped>
.v-input__slot {
    padding: 10px;
}
</style>