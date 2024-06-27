<script setup lang="ts">

</script>

<template>
  <div class="flex min-h-screen w-full flex-col items-center justify-center bg-background px-4 pt-4 md:px-6 md:pt-0">
    <div class="mx-auto flex w-full max-w-2xl flex-col items-center justify-center space-y-8">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">上传您的图片</h1>
        <p class="max-w-[600px] text-muted-foreground text-center md:text-lg/relaxed">
          请拖放图片到此处，或从您的设备中选择文件。通过我们安全可靠的图片托管平台，提升您的在线形象。
        </p>
      </div>
      <div
        class="flex w-full flex-col items-center justify-center space-y-4 rounded-xl border-2 border-dashed border-primary p-12 transition-all hover:border-primary/80 focus-within:border-primary/80">
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
          class="h-12 w-12 text-primary"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" x2="12" y1="3" y2="15"></line>
        </svg>
        <p class="text-lg font-medium text-primary md:text-xl">拖放文件或选择文件</p>
      </div>
      <div class="flex w-full flex-row items-center justify-center space-x-4">
        <button
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 hover:shadow-lg h-10 rounded-md px-6 md:h-11 md:px-8">
          上传
        </button>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-black hover:bg-gray-200 hover:shadow-lg h-10 rounded-md px-6 md:h-11 md:px-8">
          取消
        </button>
      </div>
      <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <img
          src="@/assets/placeholder.svg"
          alt="Uploaded Image"
          width="300"
          height="300"
          class="aspect-square w-full rounded-md object-cover"
        />
        <img
          src="@/assets/placeholder.svg"
          alt="Uploaded Image"
          width="300"
          height="300"
          class="aspect-square w-full rounded-md object-cover"
        />
        <img
          src="@/assets/placeholder.svg"
          alt="Uploaded Image"
          width="300"
          height="300"
          class="aspect-square w-full rounded-md object-cover"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
