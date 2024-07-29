<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const login = () => {
  authStore.setToken('YOUR-USER-TOKEN')
}
const logout = () => {
  authStore.clearToken()
}

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
      <router-link @click="login"
                   to="/login"
                   class="text-sm font-medium hover:underline underline-offset-4" href="#"
                   v-if="!authStore.isAuthenticated">
        登录
      </router-link>
      <div v-else
           class="mx-auto max-w-sm rounded-lg shadow"
           id="profile-dropdown">
        <div class="group relative" id="dropdown-trigger">
          <span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 cursor-pointer"
                id="user-icon"
                aria-haspopup="menu"
                aria-expanded="false">
            <img class="aspect-square h-full w-full" src="@/assets/placeholder-user.jpg" alt="User Icon" />
          </span>
          <ul
            class="absolute right-0 z-10 hidden w-24 divide-y divide-gray-200 rounded-lg bg-white shadow-md group-hover:block transition-opacity duration-200">
            <li class="p-2 hover:bg-gray-50 cursor-pointer hover:underline underline-offset-4">
              <router-link to="/profile" class="text-sm font-medium">
                个人资料
              </router-link>
            </li>
            <li class="p-2 hover:bg-gray-50 cursor-pointer hover:underline underline-offset-4"
                @click="logout">
              <div class="text-sm font-medium">登 出</div>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  </header>

</template>

<style scoped>

</style>
