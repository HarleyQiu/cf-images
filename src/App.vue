<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-[100dvh]">
    <Header></Header>
    <main class="flex-1 mx-auto w-full max-w-screen-xl">
      <!-- 使用插槽方式渲染组件，并应用过渡效果 -->
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-300"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <!-- :is="Component" 动态绑定组件 -->
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
