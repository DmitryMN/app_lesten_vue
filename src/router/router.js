import Main from '@/pages/Main.vue';
import PostsPage from '@/pages/PostsPage.vue';
import About from '@/pages/About.vue';
import PostPage from '@/pages/PostPage.vue';
import PostsPageStore from '@/pages/PostsPageStore.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/posts',
        component: PostsPage,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/posts/:id',
        component: PostPage,
    },
    {
        path: '/store',
        component: PostsPageStore,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;