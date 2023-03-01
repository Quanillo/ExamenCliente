import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCentrosStore = defineStore('centros', () => {
  const centros = ref([])
  const initCentros = (lista) => centros.value = lista
  const addCentro = (centro) => centros.value.push(centro)

  return { centros, initCentros, addCentro }
})
