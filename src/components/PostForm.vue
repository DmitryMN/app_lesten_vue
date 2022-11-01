<template>
    <div>
        <form class="form" @submit.prevent>
            <h4>Создание поста</h4>
            <input class="input" type="text" placeholder="Название" v-model="post.title">
            <input class="input" type="text" placeholder="Описание" v-model="post.body">
            <button class="btn" @click="onSend">Создать</button>
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
        onSend() {
            console.log(`Hello ${this.post.title}`);
        }
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