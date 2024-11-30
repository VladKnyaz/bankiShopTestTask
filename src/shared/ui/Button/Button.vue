<template>
    <button :disabled="loading" :type="type" @click="handleClick" :class="{button: true, success: success}">
        <img v-if="success" src="/src/shared/images/icons/check.svg" alt="V">
        <slot v-if="!loading"></slot>
        <div v-else>Обработка</div>
    </button>
</template>

<style src="./Button.scss"></style>

<script lang="ts">
import type { PropType, ButtonHTMLAttributes } from 'vue';

export default {
    name: 'Button',
    props: {
        onClick: {
            type: Function
        },
        success: {
            type: Boolean,
        },
        loading: {
            type: Boolean,
        },
        type: {
            type: String as PropType<ButtonHTMLAttributes['type']>,
            default: 'button'
        }
    },
    methods: {
        handleClick(e: Event) {
            this.onClick && this.onClick(e);
        }
    }
};
</script>
  