<template>
  <div id="functional">
    <h1>Stateful vs. Functional Component Benchmark</h1>

    <p>Open devtools console, select component type below, click the "Add Items" button.</p>
    <p>1,000 random items will be generated, and the time to render will be logged to the console.</p>

    <form @submit.prevent="onSubmit">
        <v-select class="dropdown" v-model="component" :items="options" label="Component type:">
        </v-select>
      <button type="submit">Add Items</button>
    </form>

    <ul>
      <component :is="component" v-for="(item) in items" :key="item" :index="item">{{ item }}</component>
    </ul>
  </div>
</template>

<script>
import Regular from "./Regular";
import Functional from "./Functional";

export default {
  components: {
    Regular,
    Functional
  },
  data: () => ({
    component: "Regular",
    items: [],
    options: ['Regular', 'Functional']
  }),

  beforeUpdate() {
    console.time();
  },

  updated() {
    console.log("Time for render:");
    console.timeEnd();
  },

  methods: {
    onSubmit() {
      this.items = Array.from({ length: 1000 }, (el, i) => {
        return Math.random();
      });
    }
  }
};
</script>

<style>
#functional {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.dropdown {
    margin-left: 25%;
    margin-right: 25%;
    width: 50%;
}
</style>
