<template>
    <div class="modal-overlay" v-if="isVisible">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">×</button>
  
        <h2 class="modal-title">{{ picture.name }}</h2>
  
        <p class="modal-author">Автор: {{ picture.author }}</p>
  
        <p class="modal-description">{{ picture.description }}</p>
  
        <div class="modal-price">
          Цена: {{ picture.priceDetails.currentPrice }} {{ picture.priceDetails.currency }}
          <span v-if="picture.priceDetails.oldPrice" class="old-price">
            (Было: {{ picture.priceDetails.oldPrice }} {{ picture.priceDetails.currency }})
          </span>
        </div>
  
        <div class="modal-slider" v-if="picture.images && picture.images.length">
          <div
            class="slider-image"
            v-for="(image, index) in picture.images"
            :key="index"
            v-show="currentImage === index"
          >
            <img :src="getImage(image)" :alt="`Изображение ${index + 1}`" />
          </div>
          <button class="slider-button prev" @click="prevImage" v-if="picture.images.length > 1">◀</button>
          <button class="slider-button next" @click="nextImage" v-if="picture.images.length > 1">▶</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { IPicture } from '@/shared/types/types';
  
  export default {
    name: 'Modal',
    props: {
      picture: {
        type: Object as () => IPicture,
        required: true
      },
      isVisible: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        currentImage: 0 
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      getImage(img: string): string {
        return `/images/${img}`;
      },
      nextImage() {
        if (this.picture.images) {
          this.currentImage = (this.currentImage + 1) % this.picture.images.length;
        }
      },
      prevImage() {
        if (this.picture.images) {
          this.currentImage = (this.currentImage - 1 + this.picture.images.length) % this.picture.images.length;
        }
      }
    }
  };
  </script>
  
  <style scoped src="./ModalPicture.scss">

  </style>
  