<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Variable para almacenar el mensaje desde Laravel
const mensaje = ref('Cargando...')

// Llamada a la API al montar el componente
onMounted(() => {
  axios.get(`${import.meta.env.VITE_API_URL}/hola`)
    .then(response => {
    mensaje.value = response.data.message
    })
    .catch(error => {
      mensaje.value = 'Error al conectar con Laravel'
      console.error(error)
    })
})
</script>

<template>
  <div class="card">
    <h1>{{ mensaje }}</h1>

    <p>
      Edita el archivo
      <code>components/HelloWorld.vue</code>
      para probar la conexión con Laravel.
    </p>
  </div>

  <p>
    Aprende más sobre Vue en
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>
  </p>
  <p>
    IDEs recomendados para Vue en
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">la guía oficial</a>
  </p>
  <p class="read-the-docs">Haz clic en los logos para más información</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
