<template>
    <div class="search">
        <div class="input">
            <input placeholder="Поиск по названию картины" type="text" @input="onChangeInput" :value="searchText">
            <Button :type="'submit'" :onClick="search">Найти</Button>
        </div>
    </div>
</template>

<style src="./Search.scss"></style> 


<script lang="ts">
import { globalStore } from '@/shared/store/store';
import { mainApi } from '@/shared/api/api';
import { IPicture } from '@/shared/types/types';
import Button from '@/shared/ui/Button/Button.vue';
import { currencyFormatter } from '@/shared/utils/currencyFormater';

export default {
    name: 'Search',
    props: {
    },
    data() {
        return {
            searchText: ''
        }
    },
    computed: {

    },
    methods: {
        onChangeInput(e: Event){
            const target = e.target as HTMLInputElement;
            this.searchText = target.value;
            this.search();
        },
        search() {
            const query = this.searchText.toLowerCase().trim();
            console.log(query);
            
            globalStore.filteredPictures = globalStore.pictures.filter(
                (picture) =>
                    picture.name.toLowerCase().includes(query) ||
                    picture.author.toLowerCase().includes(query)
            );
            console.log(globalStore.filteredPictures);
            
        }
    },
    components: {
        Button
    }
};
</script>
  