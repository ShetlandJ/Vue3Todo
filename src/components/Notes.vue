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
export default {
    setup() {
        const { addTodo, newTodo } = useTodos();

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