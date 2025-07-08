<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'

const citas = ref([])
const error = ref('')

onMounted(() => {
  api.get('/citas')
    .then(response => {
      citas.value = response.data
    })
    .catch(err => {
      error.value = err.response?.data?.message || 'Error al obtener citas'
      console.error(err)
    })
})
</script>

<template>
  <div>
    <h2 class=" text-gray-100">Lista de Citas</h2>

    <div v-if="error">{{ error }}</div>

    <table v-else class="tabla ">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody class="text-gray-100">
        <tr v-for="(cita, index) in citas" :key="cita.id">
          <td>{{ index + 1 }}</td>
          <td>{{ cita.nombre_paciente }}</td>
          <td>{{ cita.telefono_paciente }}</td>
          <td>{{ cita.fecha_hora_cita }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.tabla {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.tabla th,
.tabla td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.tabla th {
  background-color: #f2f2f2;
  font-weight: bold;
}
</style>
