<template>
  <span class="markdown">{{text}}</span>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.markdown {
    color: crimson;
    background-color: #f1f1f1;
    padding-left: 4px;
    padding-right: 4px;
    font-family: Consolas,"courier new";
}
</style>