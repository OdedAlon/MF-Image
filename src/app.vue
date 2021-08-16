<template>
  <section class="app">
    <app-header />
    <router-view />
    <app-footer />
  </section>
</template>

<script>
import appHeader from '@/cmps/app-header' 
import appFooter from '@/cmps/app-footer' 
export default {
  components: {
    appHeader,
    appFooter,
  },
} 
</script>

