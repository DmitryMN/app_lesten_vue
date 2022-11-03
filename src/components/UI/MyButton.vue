<template>
    <button class="button">{{title}}</button>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss" scoped>
.button {
    padding: 10px;
    border: 1px solid #3CB371;
}
</style>