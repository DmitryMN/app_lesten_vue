<template>
    <div class="page">
        {{page}}
    </div>
</template>

<script>
    export default {
        props: {
            page: {
                type: Number
            }
        }
    }
</script>

<style lang="scss" scoped>
.page {
    border: 1px solid black;
    padding: 10px;
}
.current-page {
    border: 2px solid teal;
}
</style>