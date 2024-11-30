<template>
    <div class="home">
      <div class="container">
        <div class="cards">
          <div class="title">Картины эпохи Возрождения</div>
          <div class="cards-content">
            <CardPicture v-for="picture in filteredPictures" v-bind:key="picture.id" :picture="picture"></CardPicture>
          </div>
        </div>
      </div>
    </div>
</template>

<style src="./Home.scss"></style>

<script lang="ts">
import { mainApi } from '@/shared/api/api';
import { globalStore } from "@/shared/store/store";
import CardPicture from '@/features/CardPicture/CardPicture.vue';

export default {
    name: 'Home',
    computed: {
      filteredPictures() {
            return globalStore.filteredPictures; // Получаем отфильтрованные данные из store
      }
    },
    methods: {
    },
    async created() {
      try {
        const getPictures = await mainApi.getPictures()
        globalStore.pictures = getPictures;
        globalStore.filteredPictures = globalStore.pictures;
      } catch(e) {
        console.log(e);
      }
    },
    components: {
      CardPicture
    },
};
</script>
  