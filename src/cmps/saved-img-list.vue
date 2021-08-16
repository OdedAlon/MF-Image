<template>
  <ul class="saved-img-list clean-list flex wrap justify-center">
    <li v-for="img in imgs" :key="img.id">
      <saved-img-preview :img="img" @remove="$emit('remove',$event)" />
    </li>
    <li>
      <router-link to="/search"><button class="btn-add">Add image</button></router-link>
    </li>
  </ul>
</template>

<script>
import savedImgPreview from '@/cmps/saved-img-preview' 
export default {
  components: {
    savedImgPreview,
  },
  props: {
    imgs: Array,
  },
} 
</script>

