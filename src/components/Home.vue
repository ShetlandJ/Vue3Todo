<template>
    <v-app>
        <v-content>
            <v-container>
                <v-layout row justify-center class="ma-5">
                    <h2>Vue 3 Comparison/Apps</h2>
                </v-layout>

                <div>
                    <p>The purpose of this repository is to demonstrate the code differences between Vue 2 and Vue 3. It was build for demonstrative purposes for the Vue Glasgow meetup.</p>

                    <p>The Todo list is written entirely in Vue 3. It uses a hooks file, useTodos, which exports all the logic.</p>

                    <p>The Notes page is to demonstrate how to export only parts of the useTodos file to achieve what we need.</p>

                    <p>The PetList component has a toggle which flips the code between two components that render identical template, but are arranged with Vue 2 and Vue 3's structure respectively.</p>

                    <p>The Width component is an example of one hook passing data to another hook. This isn't currently possible to do with mixins. The width is determined (on load) in one hook, extracted from that hook and fed into another, changing the colour of the div accordingly.</p>
                </div>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "Home"
};
</script>

<style>
body {
    font-family: "Roboto, sans-serif";
}

.v-btn:not(.v-btn--round).v-size--large {
    font-size: 40px;
}
</style>
