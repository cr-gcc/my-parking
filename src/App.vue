<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import Layout from '@/layouts/Layout.vue';

  const route = useRoute();
  const layoutComponent = computed(() => {
    return route.meta.layout === 'none' ? 'div' : Layout;
  });
</script>