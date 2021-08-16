<template>
  <section class="search app-main">
    <img-search @searched="setSearch"/>
    <searched-img-list :savedImgs="savedImgs" :imgs="imgsToShow" @save="saveImg">
    <template #pagination>
    <div class="pagination flex justify-center">
      <button @click="changePage(-1)">Previous page</button>
      <p>{{ currPage }}</p>
      <button @click="changePage(1)">Next page</button>
    </div>
    </template>
    </searched-img-list>
  </section>
</template>

<script>
import imgSearch from '@/cmps/img-search' 
import searchedImgList from '@/cmps/searched-img-list' 
export default {
  components: {
      imgSearch,
      searchedImgList,
  },
  data() {
    return {
      currPage: 1,
    } 
  },
  methods: {
    async setSearch(searchBy) {
      this.currPage = 1
      await this.$store.commit({ type: 'setSearch', searchBy }) 
      await this.$store.dispatch({ type: 'loadImgs' }) 
      this.$store.dispatch({ type: 'loadSavedImgs' }) 
    },
    async saveImg(img) {
      await this.$store.dispatch({ type: 'saveImg', img }) 
    },
    changePage(diff) {
      if (this.currPage === 1 && diff === -1) return
      this.currPage += diff
      this.reloadPage(this.currPage)
    },
    async reloadPage(currPage) {
      await this.$store.dispatch({ type: 'loadImgs', currPage }) 
      this.$store.dispatch({ type: 'loadSavedImgs' }) 
    }
  },
  computed: {
    imgsToShow() {
      return this.$store.getters.imgs 
    },
    savedImgs() {
      return this.$store.getters.savedImgs 
    }
  },
} 
</script>