<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-button class="btn" style="margin: 15px 0" @click="showDialog">Создать диалог</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <PostList v-if="!isPostLoading" :posts="posts" @remove="removePost" />
        <div v-else>Идет загрузка...</div>
    </div>
</template>

<script>

import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import axios from 'axios';

export default {
    components: {
        PostList,
        PostForm,
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(elem => elem.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
            console.log("hi");
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            } catch (e) {
                alert("Ошибка")
            } finally {
                this.isPostLoading = false;
            }
        },
    },
    mounted() {
        this.fetchPosts();
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