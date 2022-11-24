<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Название:</strong>{{ post.title }}</div>
            <div><strong>Описание:</strong>{{ post.body }}</div>
        </div>
        <div class="post__btn">
            <my-button>Открыть</my-button>
            <my-button @click="$emit('remove', post)">Удалить</my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            require: true,
        }
    },
    methods: {
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
.post__btn {
    display: flex;
}
</style>