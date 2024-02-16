<template>
  <h1>Página Consultar</h1>
  <h2>Ingrese solo el id y presione "Consultar"</h2>
<Estudiante :txtBtn="textBtn" :showId="true"/>
</template>

<script>
import Estudiante from '@/components/Estudiante.vue'
export default {
components:{
  Estudiante,
},
data(){
  return{
    textBtn: 'Consultar'
  }
}
}
</script>

<style>

</style>