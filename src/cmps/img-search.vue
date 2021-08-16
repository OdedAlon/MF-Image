<template>
  <section class="img-search flex column align-center">
    <form @submit.prevent="searchImg" class="flex column align-center">
      <input type="text" v-model="searchBy.name" placeholder="Search for Images..." />
      <button>Search</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchBy: {
        name: "",
      },
    } 
  },
  methods: {
    searchImg() {
      this.$emit('searched', JSON.parse(JSON.stringify(this.searchBy))) 
    },
  },
} 
</script>
