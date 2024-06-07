import React from 'react'

const Mycomponent = () => {
    const name = "Ricardo";
    const repository = "https://github.com/Ricardo0116/component-practice2";

    const student = {
        name: "Ricardo",
        lastname: "Capera",
        mobile: "3115469630",
        linkedinProfile: "https://www.linkedin.com/in/ricardo-capera-b615211b0/",

    }

  return (
    <div>
        <hr />
        <p>este es mi primer componente</p>
        <h2>Temas de React</h2>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>Comunicacion</li>
        </ul>
        <hr />
        <h2>Datos del Docente</h2>
        <p>Nombre: { name }</p>
        <p>Respositorio: </p>
        <p>{ repository }</p>
        <hr />
        <h2>Datos del Estudiante</h2>
        <p>Nombre: { student.name }</p>
        <p> Apellido: {student.lastname} </p>
        <p>Telefono: { student.mobile }</p>
        <p>Perfil de Linkedin: </p>
        <p>{ student.linkedinProfile }</p>
    </div>
  )
}

export default Mycomponent