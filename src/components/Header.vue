<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-background border-b px-4 lg:px-6 h-14 flex items-center justify-between">
    <a class="flex items-center justify-center" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
      <span class="sr-only">图片托管</span>
    </a>
    <nav class="flex items-center gap-4 sm:gap-6">
      <router-link to="/" class="text-sm font-medium hover:underline underline-offset-4">
        首页
      </router-link>
      <router-link to="/text2img" class="text-sm font-medium hover:underline underline-offset-4">
        探索
      </router-link>
      <router-link to="/upload" class="text-sm font-medium hover:underline underline-offset-4" href="#">
        上传
      </router-link>
      <router-link to="/profile" class="text-sm font-medium hover:underline underline-offset-4" href="#">
        个人资料
      </router-link>
      <span
        class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
        type="button"
        id="radix-:r8:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        <img class="aspect-square h-full w-full" src="@/assets/placeholder-user.jpg" alt="" />
      </span>
    </nav>
  </header>

</template>

<style scoped>

</style>
