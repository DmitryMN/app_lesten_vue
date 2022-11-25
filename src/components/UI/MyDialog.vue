<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div class="dialog__container" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
 import toggleMixin from '@/mixins/toggleMixin';

export default {
    name: 'my-dialog',
    mixins: [toggleMixin],
}
</script>

<style lang="scss">
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog__container {
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
}
</style>