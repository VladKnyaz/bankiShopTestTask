<template>
      <div id="app">
          <Header/>
          <Home/>
          <Footer/>
      </div>
</template>

<style src="./index.scss"></style>

<script lang="ts">
import Header from '@/shared/ui/Header/Header.vue';
import Home from '@/pages/Home/Home.vue';
import Footer from '@/shared/ui/Footer/Footer.vue';

export default {
    name: 'App',
    components: {
      Home,
      Header,
      Footer
    },
};
</script>
  