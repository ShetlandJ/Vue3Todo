# vuetwothree

## Project setup
```
yarn install
```

## Project explanation

Vue 3's function-based API was proposed in an RFC in May 2019, and it was divisive. I wanted to better understand the benefits and so I created this repository for the purposes of better appreciating some of the changes that will be coming down the line.

## The project

The project is divided into two parts, "Todo" and "Notes". The Todo list was forked from a handy Codepen made by [@sharon-the-encoder](https://codepen.io/sharon-the-encoder) (@CodeFa on Github) - which sped up my intial work!

The project is uses a store, components and hooks. The store manages all the CR(U)D of the Todo List Items, the hooks feed that information to the component, which largely becomes a template with very little in the way of logic inside.

The Notes page is purely designed to show the extensibility of the hooks files. It's not the best example in the world, but it shows how easy it is to import the functionality required to interact with the store via the useTodos.js hooks file.