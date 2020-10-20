<template>
    <div id="app">
        <v-app>
            <v-content>
                <v-container>
                    <v-alert type="success">
                        <p>
                            <strong>Notes</strong> demonstrates importing only the specific logic from a hook that is required for the component to complete its task.
                        </p>

                        <p>In this example, the note taking app has an option for someone to add their note as a todo. As we've already written a hook file that contains logic that allows us to add todo list items to our todo list, we only import that logic and use it in the component.</p>

                        <p>If we had that logic encapsulated in a mixin, we'd be exposing everything in the mixing by default. The function api allows us to have cleaner, smaller components due to the moduler nature of the imports.</p>
                    </v-alert>

                    <v-layout row justify-center class="ma-5">
                        <v-flex xs12 sm8>
                            <v-card>
                                <v-textarea
                                    outlined
                                    name="input-7-1"
                                    v-model="newTodo"
                                    label="Enter a note..."
                                ></v-textarea>
                                <v-btn style="margin-right: 10px" @click="addTodo">Set a todo</v-btn>
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
            newTodo
        };
    }
};
</script>
<style scoped>
.v-input__slot {
    padding: 10px;
}
</style>