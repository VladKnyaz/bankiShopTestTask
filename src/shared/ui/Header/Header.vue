<template>
    <header class="header">
        <div class="container">
            <nav class="navigation">
            <ul class="list">
                <li class="item">
                    <a href="#">Каталог</a>
                </li>
                <li class="item">
                    <a href="#">Доставка</a>
                </li>
                <li class="item">
                    <a href="#">Оплата</a>
                </li>
                <li class="item">
                    <a href="#">Контакты</a>
                </li>
                <li class="item">
                    <a href="#">О компании</a>
                </li>
            </ul>
        </nav>
        <Search></Search>
        <!-- <div>SEARCH <button>eash</button></div> -->
        </div>
    </header>
</template>

<style src="./Header.scss"></style>

<script lang="ts">
import Search from '@/features/Search/Search.vue';

export default {
    name: 'Header',
    components: {
        Search
    }
};
</script>
  