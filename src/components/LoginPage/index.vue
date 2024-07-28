<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">登录您的帐户</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          或者
          <a class="font-medium text-black hover:text-black/80" href="#">
            注册一个新帐户
          </a>
        </p>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-600"
            for="email">
            用户名
          </label>
          <div class="mt-1">
            <input
              class="block w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md placeholder-muted-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              autocomplete="email"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
              class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-600"
              for="password"
            >
              密码
            </label>
            <a href="#" class="text-sm font-medium text-black hover:text-black/80">
              忘记密码？
            </a>
          </div>
          <div class="mt-1">
            <input
              class="block w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md placeholder-muted-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              autocomplete="current-password"
              placeholder="Enter your password"
              type="password"
              name="password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            登录
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
