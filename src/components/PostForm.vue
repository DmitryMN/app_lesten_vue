<template>
    <div>
        <form class="form" @submit.prevent>
            <h4>Создание поста</h4>
            <my-input placeholder="Название" v-model="post.title"/>
            <my-input placeholder="Описание" v-model="post.body"/>
            <my-button class="btn" @click="createPost">Создать</my-button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.post.title,
                body: this.post.body,
            }
            this.$emit('create', newPost);
            this.post = {
                title: '',
                body: '',
            }
        },
    },
}
</script>

<style lang="scss">
.form {
    display: flex;
    flex-direction: column;
}

.btn {
    align-self: flex-end;
    border: 1px solid #131313;
    margin-top: 15px;
    padding: 10px 15px;
}

.input {
    width: 100%;
    border: 1px solid #131313;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>