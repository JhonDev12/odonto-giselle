<template>
  <div class="min-h-screen  text-gray-800">
    
    <!-- Header global (puedes crear el componente si lo deseas) -->
    <!-- <HeaderComponent /> -->

    <!-- Contenido dinámico de las vistas -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer global -->
    <!-- <FooterComponent /> -->
  </div>
</template>

<script setup>
// Aquí puedes importar los componentes globales si los tienes:
// import HeaderComponent from './components/HeaderComponent.vue'
// import FooterComponent from './components/FooterComponent.vue'
</script>

<style scoped>
/* Puedes dejar este bloque vacío si usas exclusivamente TailwindCSS */
</style>
