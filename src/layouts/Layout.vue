<template>
  <div class="min-h-screen flex flex-col">
		<Header/>
    <main class="flex-1 px-8 py-6 bg-zinc-100">
      <slot />
    </main>
		<Footer/>
  </div>
</template>
<script setup>
	import Header from '@/components/HeaderComp.vue';
	import Footer from '@/components/FooterComp.vue';
</script>