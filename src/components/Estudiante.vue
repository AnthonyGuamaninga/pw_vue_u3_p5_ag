<template>
  <div class="container">
    <div class="consulta">
      <h3>Datos que posee el estudiante</h3>
      <input
        v-if="showId"
        class="id"
        v-model="id"
        type="text"
        placeholder="Ingrese id"
      />
      <div v-if="txtBtn != 'Consultar'">
        <p>Nombre:</p>
        <input v-model="nombre" type="text" placeholder="sección nombre" />
        <p>Apellido:</p>
        <input v-model="apellido" type="text" placeholder="sección apellido" />
        <p>Género:</p>
        <input v-model="genero" type="text" placeholder="sección género" />
        <p>Fecha de nacimiento:</p>
        <input
          v-model="fechaNacimiento"
          type="datetime-local"
          placeholder="sección fecha de nacimiento"
        />
        <p>Hobby:</p>
        <input v-model="hobby" type="text" placeholder="sección hobby" />
        <p>País:</p>
        <input v-model="pais" type="text" placeholder="sección país" />
        <p>Dirección:</p>
        <input
          v-model="direccion"
          type="text"
          placeholder="sección derección"
        />
        <p>Tipo de estudiante:</p>
        <input
          v-model="tipoEstudiante"
          type="text"
          placeholder="sección tipo de estudiante"
        />
        <p>Carrera:</p>
        <input v-model="carrera" type="text" placeholder="sección carrera" />
        <p>Tipo de sangre:</p>
        <input
          v-model="tipoSangre"
          type="text"
          placeholder="sección tipo de sangre"
        />
      </div>

      <div v-else>
        <p>Nombre:</p>
        <input v-model="nombre" type="text" placeholder="sección nombre" />
        <p>Apellido:</p>
        <input v-model="apellido" type="text" placeholder="sección apellido" />
        <p>Información detallada:</p>
        <input
          v-model="linkC"
          type="text"
          placeholder="sección de información general"
        />
      </div>

      <div class="btn">
        <button @click="selectMethod">{{ txtBtn }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  consultarEstudianteFachada,
  insertarFacahada,
  actualizarFachada,
} from "../helpers/clienteEstudiante.js";

export default {
  props: {
    txtBtn: {
      type: String,
      require: true,
    },
    showId: {
      type: Boolean,
      require: true,
    },
  },
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
    async actualizar() {
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
      await actualizarFachada(this.id, estuBody);
    },
    async selectMethod() {
      switch (this.txtBtn) {
        case "Guardar":
          await this.insertar();
          break;
        case "Actualizar":
          await this.actualizar();
          break;
        case "Consultar":
          await this.consultaPorId();
          break;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}

.id {
  margin-bottom: 30px;
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

.btn {
  margin-top: 30px;
}
</style>