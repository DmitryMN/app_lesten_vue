<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input v-focus placeholder="Поиск..." :model-value="searchQuery" @update:model-value="setSearchQuery"></my-input>
        <div class="post__btns">
            <my-button class="btn" @click="showDialog">Создать диалог</my-button>
            <my-select :options="sortOptions" :model-value="selectedSort"/>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePosts"></div>
    </div>
</template>

<script>

import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    components: {
        PostList,
        PostForm,
        // PostPagination,
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts',
        }),
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
    },
    mounted() {
        this.fetchPosts();
    },
    watch: {

    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostLoading: state => state.post.isPostLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
        }),
    },
}
</script>

<style>
.post__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.observer {
    height: 30px;
    background: green;
}
</style>