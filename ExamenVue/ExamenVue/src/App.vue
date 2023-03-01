<template>
    <select name="centros" v-model="centroSeleccionado">
      <option v-for="centro in centrosP.centros" @click="centroSeleccionado = centro.nombre">{{ centro }}</option>
    </select>
    <h2>{{ centroSeleccionado }}</h2>
    <input type="text" v-model="nuevoCentro" @keyup.enter="addCenter">
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useCentrosStore } from '@/stores/centros.js'

const centrosP = useCentrosStore();

const centroSeleccionado = ref('')
const nuevoCentro = ref('')

onMounted(async () => {
  try{
    const centros = []
    const response = await axios.get(
    `http://localhost:3000/Centros`,
    );
    response.data.map(x=>centros.push(x.nombre))
    centrosP.initCentros(centros)
  }
  catch(e){
    console.log(e)
  }
})

const addCenter = async () => {
  if(nuevoCentro.value !== ''){
    try {
      await axios.post(
          `http://localhost:3000/Centros/`, {
            nombre: `${nuevoCentro.value}`,
      })
      centrosP.addCentro(nuevoCentro.value)
      nuevoCentro.value = ''        
    }
    catch(e){
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
