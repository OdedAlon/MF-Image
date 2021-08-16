<template>
  <section class="app-header flex space-between align-center">
    <div class="logo flex">
      <img src="@/assets/img/mf_logo_blue.svg"/>
      <h2>Image</h2>
    </div>
    <nav>
      <router-link to="/" v-if="currPath"><button>Back</button></router-link>
    </nav>
  </section>
</template>

<script>
export default{
  computed: {
    currPath() {
      return this.$route.path === "/search" 
    }
  },
}
</script>
