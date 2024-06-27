<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-[100dvh]">
    <Header></Header>
    <main class="flex-1 mx-auto w-full max-w-screen-xl">
      <RouterView></RouterView>
    </main>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
