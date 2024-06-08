import React from 'react'

const Child = ({ name, setName, addMessage }) => {

    const sendMenssage = () => {
        addMessage ("este es el mensaje del HIJO Mar");
    }

    const changeName = () => {
        setName ("Nuevo Nombre Hijo Mar")
    }

  return (
    <div>
        {name}
        <div>
            <button onClick={ sendMenssage }>Enviar mensaje</button>
            <button onClick={ changeName }>Cambiar Nombre</button>
        </div>
    </div>
  )
}

export default Child