<template>
    <section>
      <ul class="searched-img-list clean-list flex wrap justify-center">
        <li v-for="img in imgs" :key="img.id">
          <searched-img-preview :img="img" :isAdded="isImgSaved(img.id)"
            @save="$emit('save', $event)" />
        </li>
      </ul>
      <slot name="pagination" v-if="imgs"></slot>
    </section>
</template>

<script>
import searchedImgPreview from "@/cmps/searched-img-preview" 
export default {
  components: {
    searchedImgPreview,
  },
  props: {
    imgs: Array,
    savedImgs: Array,
  },
  methods: {
    isImgSaved(id) {
      if (!this.savedImgs) return 
      const idx = this.savedImgs.findIndex((img) => img.id === id) 
      return idx === -1 ? false : true 
    },
  },
} 
</script>

