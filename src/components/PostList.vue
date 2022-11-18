<template>
    <div v-if="posts.length > 0">
        <h3>Список пользователей</h3>
        <transition-group name="list">
            <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
        </transition-group>
    </div>
    <h3 style="color: red;" v-else>Список пуст</h3>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import { TransitionGroup } from 'vue';

export default {
    components: {
        PostItem,
        TransitionGroup
    },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.list-move {
  transition: transform 0.6s ease;
}
</style>