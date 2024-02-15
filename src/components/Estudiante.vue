<template>
  <div class="container">
    <h1>Buscar Estudiante</h1>
    <div class="consulta">
      <h2>Consultar por id estudiante</h2>
      <input v-model="id" type="text" />
      <button @click="consultaPorId">Consultar</button>

      <p>Nombre:</p>
      <input v-model="nombre" type="text" />
      <p>Apellido:</p>
      <input v-model="apellido" type="text" />
      <p>Información completa:</p>
      <input v-model="linkC" type="text" />
    </div>

    <div class="insertar">
      <h2>Ingreso de datos del estudiante</h2>

      <div v-if="!isGet">
        <p>Nombre:</p>
        <input v-model="nombre" type="text" />
        <p>Apellido:</p>
        <input v-model="apellido" type="text" />
        <p>Género:</p>
        <input v-model="genero" type="text" />
        <p>Fecha de nacimiento:</p>
        <input v-model="fechaNacimiento" type="datetime-local" />
        <p>Hobby:</p>
        <input v-model="hobby" type="text" />
        <p>País:</p>
        <input v-model="pais" type="text" />
        <p>Dirección:</p>
        <input v-model="direccion" type="text" />
        <p>Tipo de estudiante:</p>
        <input v-model="tipoEstudiante" type="text" />
        <p>Carrera:</p>
        <input v-model="carrera" type="text" />
        <p>Tipo de sangre:</p>
        <input v-model="tipoSangre" type="text" />

        <div class="btn-insert">
            <button  @click="insertar">Insertar</button>
        </div>
        
      </div>
      <button @click="showInputs" v-else>Mostrar campos</button>
    </div>
  </div>
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
      linkC: null,
      isGet: false,
    };
  },
  methods: {
    async consultaPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("Desde componente");
      console.log(data);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.linkC = data._links.self.href;
      this.isGet = true;
    },
    async insertar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        hobby: this.hobby,
        pais: this.pais,
        direccion: this.direccion,
        tipoEstudiante: this.tipoEstudiante,
        carrera: this.carrera,
        tipoSangre: this.tipoSangre,
      };
      await insertarFacahada(estuBody);
    },
    showInputs() {
      this.clearVariables();
      this.isGet = false;
    },
    clearVariables() {
      this.id = null;
      this.nombre = null;
      this.apellido = null;
      this.linkC = null;
    },
  },
};
</script>

<style>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}

.consulta,
.insertar {
  padding: 0px 40px 50px;
  background-color: rgb(167, 226, 226);
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0px 10px 50px gray;
}
p {
  margin: 25px 0px 5px;
}
input {
  border-radius: 10px;
  padding: 5px;
  border: beige solid;
}

button {
  border-radius: 10px;
  padding: 5px;
  border: gray solid;
  width: 130px;
  margin: 5px;
}

.btn-insert{
    margin-top: 30px;
}
</style>