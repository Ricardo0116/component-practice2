import React from 'react'

const FourthComponent = () => {
    const handleClicked = (e) => {
        alert("Haz hecho click al boton!!!")
    }

    const handleDoubleClicked = () => {
        alert("Haz hecho doble click al boton!!!")
    }
  return (
    <div>
        <h2>Eventos en React</h2>
        {/*Evento Click*/}
        <div>
            <button onClick={ ()=> {
                console.log("Hola, Soy un evento click")
            } }>Haz Click!!!</button>
        </div>

        <div>
            <button onClick={ handleClicked }>Aqui tambien has click</button>
        </div>

        {/*Evento Doble Click*/}
        <div>
            <button onDoubleClick={ handleDoubleClicked }>Haz Doble Click</button>
        </div>

        {/*Evento Mouse Enter y Mouse Leve*/}
        
        {/*Evento Focus y Blur*/}
    </div>
  )
}

export default FourthComponent