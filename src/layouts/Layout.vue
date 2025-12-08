<template>
  <div class="min-h-screen flex flex-col">
		<Header/>
    <main class="flex-1 p-4 bg-zinc-100">
      <div class="space-y-4 px-4 py-6">
        <slot />
      </div>
    </main>
		<Footer/>
  </div>
</template>
<script setup>
	import Header from '@/components/HeaderComp.vue';
	import Footer from '@/components/FooterComp.vue';
</script>