<template>
  <h1>Componente Estudiante</h1>
  <input v-model="id" type="text" />
  <button @click="consultaPorId">Consultar</button>
  <input v-model="nombre" type="text" />
  
  <input v-model="apellido" type="text">
  <button @click="insertar">Insertar</button>
</template>

<script>
import {
  consultarEstudianteFachada,
  insertarFacahada,
} from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async consultaPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("Desde componente");
      console.log(data);
      this.nombre = data.nombre;
    },
    async insertar() {
      const estuBody = {
        nombre: "Darla",
        apellido: this.apellido,
        genero: "F",
        fechaNacimiento: "1998-06-19T00:00:00",
        hobby: "Cantar",
        pais: "Ecuador",
        direccion: "Cotocollao",
        tipoEstudiante: "Regular",
        carrera: "Recursos Humanos",
        tipoSangre: "O+",
      };
      await insertarFacahada(estuBody);
    },
  },
};
</script>

<style>
</style>