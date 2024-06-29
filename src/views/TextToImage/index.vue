<script setup lang="ts">

</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
    <div class="max-w-3xl px-4 py-12 space-y-6 text-center">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">从文本生成图像</h1>
      <p class="text-lg text-gray-500">
        通过从文本生成令人惊叹的图像，将您的想法变为现实。
      </p>
      <form class="flex flex-col sm:flex-row items-center gap-4 w-full">
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="请输入一句话来描述你想要生成的图片，例如：一只好看的猫…"
          type="text"
        />
        <button
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 hover:shadow-lg h-10 rounded-md px-8 py-2 w-full sm:w-auto"
          type="submit">
          生成
        </button>
      </form>
      <div class="w-full max-w-2xl mx-auto">
        <img
          src="@/assets/placeholder.svg"
          alt="Generated Image"
          width="600"
          height="400"
          class="w-full h-auto rounded-lg object-cover"
          style="aspect-ratio: 600 / 400; object-fit: cover;"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
