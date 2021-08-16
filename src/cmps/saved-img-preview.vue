<template>
  <article class="saved-img-preview flex column space-between w3-animate-opacity">
    <p class="data">{{img.user}}</p>
    <img :src="`${img.imgUrl}`" />
    <!-- <button class="action" @click="$emit('remove',img.id)">Remove</button> -->
    <button class="action" @click="$emit('remove',img.id)">remove</button>
  </article>
</template>

<script>
export default {
  props: {
    img: Object,
  },
} 
</script>