import Vue from 'vue';
import { TPictures } from "../types/types"


export type TPicturesObservableData = {
    pictures: TPictures;
    filteredPictures: TPictures;
    picturesInShopCart: number[];
}

const getCartData = () => {
    const localCart = localStorage.getItem('cart');
    if (localCart) return JSON.parse(localCart);
    return []
}

export const globalStore = Vue.observable<TPicturesObservableData>({
    pictures: [],
    filteredPictures: [],
    picturesInShopCart: getCartData(),
});