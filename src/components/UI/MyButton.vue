<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style lang="scss" scoped>
.button {
    padding: 10px;
    border: 1px solid #3CB371;
}
</style>