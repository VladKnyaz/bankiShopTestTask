<template>
    <div :class="{['card-picture']:true, isSold: picture.isSold}">
        <div class="image" @click="openModal" style="cursor: pointer;">
            <img 
                v-if="picture.images && picture.images.length > 0" 
                :src="getImage(picture.images[0])" 
                :alt="picture.name || 'Картина'" 
            />
        </div>

        <div class="description" @click="openModal" style="cursor: pointer;">
            <div class="name">{{ picture.name }}</div>
            <div class="author">{{ picture.author }}</div>
        </div>

        <div class="price-info">
            <div class="prices">
                <div class="old-price" v-if="picture.priceDetails.oldPrice">
                    {{ currencyFormatter(picture.priceDetails.oldPrice, picture.priceDetails.currency) }}
                </div>
                <div class="current-price">
                    {{ currencyFormatter(picture.priceDetails.currentPrice, picture.priceDetails.currency) }}
                </div>
            </div>
            <Button :loading="isProcessBuy" :onClick="buy" :success="isInCart">
                {{ isInCart ? "В корзине" : "Купить" }}
            </Button>

        </div>

        <ModalPicture 
            :picture="picture"
            :isVisible="isModalVisible"
            @close="closeModal"
        />
    </div>
    
</template>

<style src="./CardPicture.scss"></style>


<script lang="ts">
import { globalStore } from '@/shared/store/store';
import { mainApi } from '@/shared/api/api';
import { IPicture } from '@/shared/types/types';
import Button from '@/shared/ui/Button/Button.vue';
import { currencyFormatter } from '@/shared/utils/currencyFormater';
import ModalPicture from '../ModalPicture/ModalPicture.vue';

export default {
    name: 'CardPicture',
    props: {
        picture:{
            type: Object as () => IPicture,
            required: true
        },
    },
    data() {
        return {
            isProcessBuy: false,
            isModalVisible: false
        }
    },
    computed: {
        isInCart(): boolean {
            return globalStore.picturesInShopCart.includes(this.picture.id);
        }
    },
    methods: {
        openModal() {
         this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        currencyFormatter,
        async buy() {
            this.isProcessBuy = true;
            await mainApi.buyPicture(this.picture.id);
            this.isProcessBuy = false;
            globalStore.picturesInShopCart.push(this.picture.id)
            localStorage.setItem('cart', JSON.stringify(globalStore.picturesInShopCart));
        },
        getImage(img: string) {
            return `./images/${img}`;
        }
    },
    components: {
        Button,
        ModalPicture
    }
};
</script>
  