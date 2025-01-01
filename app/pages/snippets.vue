<template>
  <div>
    <ClientOnly>
      <SnippetsView />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const embedderPolicy = useResponseHeader('Cross-Origin-Embedder-Policy');
embedderPolicy.value = 'require-corp';
const openerPolicy = useResponseHeader('Cross-Origin-Opener-Policy');
openerPolicy.value = 'same-origin';
</script>

<style scoped>
div {
  height: 100%;
}
</style>
