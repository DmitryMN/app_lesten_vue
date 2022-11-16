<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-button class="btn" @click="showDialog">Создать диалог</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>        
        <PostList :posts="posts" @remove="deletePost"/>
    </div>
</template>

<script>

import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'

export default {
    components: {
        PostList,
        PostForm,
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'Пост о java script 1', body: 'Javascript универсальный язык программмирования', },
                { id: 2, title: 'Пост о java script 2', body: 'Javascript универсальный язык программмирования 2', },
                { id: 3, title: 'Пост о java script 3', body: 'Javascript универсальный язык программмирования 3', },
            ],
            dialogVisible: false
        } 
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        deletePost(post) {
            this.posts = this.posts.filter(elem => elem.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
            console.log("hi");
        }
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
</style>