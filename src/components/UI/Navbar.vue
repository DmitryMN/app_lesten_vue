<template>
    <div class="header">
        <div class="header__logo" @click="$router.push('/');">Vue3</div>
        <nav class="navbar">
            <ul class="navbar__list">
                <li class="navbar__item"><my-button @click="$router.push('/posts')">Посты</my-button></li>
                <li class="navbar__item"><my-button @click="$router.push('/about')">О нас</my-button></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    height: 50px;        
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    padding: 10px 10px;
}
.header__logo {
    border: 2px solid tan;
    border-radius: 20px;
    margin-right: 10px;
    padding: 10px;
}
.navbar__list {
    display: flex;
}
.navbar__item {
    list-style: none;
}

.navbar__item a {
    display: inline-block;
    text-decoration: none;
    margin-right: 20px;
    padding: 5px;
    color: black;
}
</style>