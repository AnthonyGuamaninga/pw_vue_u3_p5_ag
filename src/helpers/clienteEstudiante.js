import axios from "axios";

// FUNCIONES
const consultarEstudiante = async (id) =>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data)
    console.log(data);
    return data;
}

const insertar = async (body) => {
    const data = axios.post("http://localhost:8080/API/v1.0/Matricula/estudiantes",body).then(r=>r.data)
    console.log(data)
}

const actualizar = async(id, body) =>{
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, body).then(r => r.data)
    console.log(data);
}

const eliminar = async (id) =>{
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data);
    console.log(data);
}


// FACHADAS
export const consultarEstudianteFachada = async (id) =>{
    return await consultarEstudiante(id);
}

export const insertarFacahada= async(body) =>{
    await insertar(body)
}
export const actualizarFachada = async(id, body) =>{
    await actualizar(id, body);
}

export const eliminarFachada = async(id) => {
    await eliminar(id);
}


