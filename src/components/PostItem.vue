<template>
    <div class="post" :key="post.id">
        <div>
            <div><strong>Название:</strong>{{ post.title }}</div>
            <div><strong>Описание:</strong>{{ post.body }}</div>
        </div>
        <div class="post__btn">
            <my-button title="Удалить" />
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';

export default {
    components: {
        MyButton,
    },
    props: {
        post: {
            type: Object,
            require: true,
        }
    }
}
</script>

<style lang="scss">
.post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid #131313;
    margin-top: 15px;
}
</style>