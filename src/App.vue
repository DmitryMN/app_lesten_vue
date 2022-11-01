<template>
    <div class="app">
        <form class="form">
            <h4>Создание поста</h4>
            <input class="input" type="text" placeholder="Название" :value="title" @input="title=$event.target.value">
            <input class="input" type="text" placeholder="Описание" :value="body" @input="body=$event.target.value">
            <button class="btn" @click="createPost">Создать</button>
        </form>
        <div class="post" v-for="post in posts" :key="post.id">
            <div><strong>Название:</strong>{{post.title}}</div>
            <div><strong>Описание:</strong>{{post.body}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: 'Пост о java script 1', body: 'Javascript универсальный язык программмирования', },
                { id: 2, title: 'Пост о java script 2', body: 'Javascript универсальный язык программмирования 2', },
                { id: 3, title: 'Пост о java script 3', body: 'Javascript универсальный язык программмирования 3', },
            ],
            title: '',
            body: '',
        } 
    },
    methods: {
        createPost() {
            const newPost = {
                id: new Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost)
        },
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 10px 10px;
}
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
.post {
    padding: 15px;
    border: 1px solid #131313;
    margin-top: 15px;
}
.input {
    width: 100%;
    border: 1px solid #131313;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>