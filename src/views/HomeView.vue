<script setup lang="ts">

</script>

<template>
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
      <div class="space-y-4 mt-[15%] flex-1">
        <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          分享你的瞬间给全世界
        </h1>
        <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          我们的图片托管平台让上传、分享和发现惊艳的视觉效果变得简单。今天就开始吧！
        </p>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 hover:shadow-lg h-11 rounded-md px-8">
          上传图片
        </button>
      </div>
      <img
        src="../assets/placeholder.svg"
        width="600"
        height="600"
        alt="Hero"
        class="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
      />
    </div>
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">探索我们的图片库</h2>
          <p class="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            浏览我们庞大的精美图片集合，或按类别筛选以找到您所寻找的内容。
          </p>
        </div>
        <div class="flex flex-col gap-2 min-[400px]:flex-row">
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            排序
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
              class="ml-2 h-4 w-4">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            筛选
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
              class="ml-2 h-4 w-4"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        <img
          src="../assets/placeholder.svg"
          width="300"
          height="300"
          alt="Image"
          class="w-full aspect-square object-cover rounded-lg"
        />
        <img
          src="../assets/placeholder.svg"
          width="300"
          height="300"
          alt="Image"
          class="w-full aspect-square object-cover rounded-lg"
        />
        <img
          src="../assets/placeholder.svg"
          width="300"
          height="300"
          alt="Image"
          class="w-full aspect-square object-cover rounded-lg"
        />
        <img
          src="../assets/placeholder.svg"
          width="300"
          height="300"
          alt="Image"
          class="w-full aspect-square object-cover rounded-lg"
        />
        <img
          src="../assets/placeholder.svg"
          width="300"
          height="300"
          alt="Image"
          class="w-full aspect-square object-cover rounded-lg"
        />
        <img
          src="../assets/placeholder.svg"
          width="300"
          height="300"
          alt="Image"
          class="w-full aspect-square object-cover rounded-lg"
        />
        <img
          src="../assets/placeholder.svg"
          width="300"
          height="300"
          alt="Image"
          class="w-full aspect-square object-cover rounded-lg"
        />
        <img
          src="../assets/placeholder.svg"
          width="300"
          height="300"
          alt="Image"
          class="w-full aspect-square object-cover rounded-lg"
        />
      </div>
    </div>
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
      <img
        src="../assets/placeholder.svg"
        width="600"
        height="600"
        alt="User Profile"
        class="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
      />
      <div class="space-y-4">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">你的个人图库</h2>
        <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          管理你上传的图片，将它们整理成集合，并与朋友和家人分享。
        </p>
        <div class="flex flex-col gap-2 min-[400px]:flex-row">
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 hover:shadow-lg h-10 px-4 py-2">
            查看资料
          </button>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-black hover:bg-gray-200 hover:shadow-lg h-10 px-4 py-2">
            管理图片
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
