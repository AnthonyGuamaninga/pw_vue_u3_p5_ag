<template>
  <h1>Página Actualizar</h1>
  <h2>Ingrese el id del estudiante que va a actualizar</h2>
  <Estudiante :txtBtn="textBtn" :showId="true"/>
</template>

<script>
import Estudiante from "@/components/Estudiante.vue";

export default {
  components: {
    Estudiante,
  },
  data(){
    return{
      textBtn: 'Actualizar',
    }
  }
};
</script>

<style>
</style>