<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-input placeholder="Поиск..." v-model="searchQuery"></my-input>
        <div class="app__btns">
            <my-button class="btn" @click="showDialog">Создать диалог</my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
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
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                { value: "title", name: "По названия" },
                { value: "body", name: "По содержимому" }
            ]
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
    },
    watch: {
        // selectedSort(newValue) {
        //     this.posts.sort((a, b) => {
        //         return a[newValue]?.localeCompare(b[newValue]);
        //     });
        // }
    },
    computed: {
        sortedPosts () {
            return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]));
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
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

.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}
</style>