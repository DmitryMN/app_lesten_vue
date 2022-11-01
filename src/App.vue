<template>
    <div class="app">
        <post-form/>
        <PostList :posts="posts"/>
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
        } 
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
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
</style>