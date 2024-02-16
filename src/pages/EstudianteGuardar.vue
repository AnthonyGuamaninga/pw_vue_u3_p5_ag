<template>
  <h1>Página Guardar</h1>
  <div>
    <h2>Ingrese los datos del estudiante</h2>
    <Estudiante :txtBtn="textBtn" :showId="false"/>
  </div>
</template>

<script>
import Estudiante from '@/components/Estudiante.vue'

export default {
  components:{
    Estudiante,
  },
  data(){
    return{
      textBtn : "Guardar",
    }
  },
};
</script>

<style>
</style>