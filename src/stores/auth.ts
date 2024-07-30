import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(sessionStorage.getItem('authToken'))

  function setToken(newToken: string) {
    token.value = newToken
    sessionStorage.setItem('authToken', newToken)
  }

  function clearToken() {
    token.value = null
    sessionStorage.removeItem('authToken')
  }

  const isAuthenticated = computed(() => token.value !== null)

  return {
    token,
    setToken,
    clearToken,
    isAuthenticated
  }
})


