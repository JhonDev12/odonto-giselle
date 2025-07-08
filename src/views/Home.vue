<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="text-center py-8 ">
    <div class="flex justify-center gap-8 mb-6">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="h-24 hover:drop-shadow-[0_0_2em_#42b883aa]" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
/* No es necesario agregar estilos si estás usando solo Tailwind */
</style>
