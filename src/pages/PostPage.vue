<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input placeholder="Поиск..." v-model="searchQuery"></my-input>
        <div class="post__btns">
            <my-button class="btn" @click="showDialog">Создать диалог</my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
        <div v-else>Идет загрузка...</div>
        <div class="observer" ref="observer"></div>
        <!-- <div class="page__wrapper">
            <post-pagination 
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                :page="pageNumber" 
                :class="{
                    'current-page': page === pageNumber
                }" 
                @click="changePage(pageNumber)" />
        </div> -->
    </div>
</template>

<script>

import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
// import PostPagination from '@/components/PostPagination.vue'
import axios from 'axios';

export default {
    components: {
        PostList,
        PostForm,
        // PostPagination,
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
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
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data;
            } catch (e) {
                alert("Ошибка")
            } finally {
                this.isPostLoading = false;
            }
        },
        // changePage (pageNumber) {
        //     this.page = pageNumber;
        //     this.fetchPosts();
        // },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert("Ошибка")
            } finally {
            }
        },
    },
    mounted() {
        this.fetchPosts();
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting && this.page < this.totalPages){
                this.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);

    },
    watch: {

    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]));
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
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