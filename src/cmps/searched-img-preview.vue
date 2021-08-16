<template>
  <article class="searched-img-preview flex column space-between w3-animate-opacity">
    <img :src="`${img.imgUrl}`" />
    <button class="action" :class="isAdded ? 'false' : ''" @click="$emit('save',img)">Add</button>
    <div class="added" :class="isAdded ? 'true' : ''">Added</div>
  </article>
</template>

<script>
export default {
  props: {
    img: Object,
    isAdded: Boolean,
  },
} 
</script>