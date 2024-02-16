<template>
  <div class="container">
    <div class="elementos">
        <input v-model="id" type="text" placeholder="Ingrese id" />
        <button @click="eliminar">Eliminar</button>
    </div>
    
  </div>
</template>

<script>
import { eliminarFachada } from "../helpers/clienteEstudiante.js";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminar() {
      await eliminarFachada(this.id);
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

.id {
  margin-bottom: 30px;
}

.elementos{
  padding: 40px;
  background-color: rgb(167, 226, 226);
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0px 10px 50px gray;
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