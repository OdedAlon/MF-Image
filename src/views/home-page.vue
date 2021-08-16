<template>
    <section class="home-page app-main">
        <h1>My Favorite Images</h1>
        <saved-img-list class="img-list" :imgs="savedImgs"  @remove="removeImg"/>
    </section>
</template>

<script>
import SavedImgList from '../cmps/saved-img-list.vue' 
export default {
  components: {
    SavedImgList
  },
  created() {
    this.loadSavedImgs() 
  },
  methods: {
    async loadSavedImgs() {
       this.$store.dispatch({ type: 'loadSavedImgs' }) 
    },
    async removeImg(id) {
      await this.$store.dispatch({ type: 'removeImg', id }) 
    },
  },
  computed: {
    savedImgs() {
      return this.$store.getters.savedImgs 
    },
  },
} 
</script>