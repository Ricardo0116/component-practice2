import React from 'react'

const FourthComponent = () => {
    const handleClicked = (e) => {
        alert("Haz hecho click al boton!!!")
    }

    const handleDoubleClicked = (e) => {
        alert("Haz hecho doble click al boton!!!")
    }

    const handleMouseEnter = (e) =>{
        console.log("Haz entrado a la caja con el mouse!!!")
    }

    const handleMouseLeave = (e) => {
        console.log("Haz salido de mi caja")
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
        <hr />  
        <div id="box"
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
        >
            <p>pasa el mouse por encima</p>
        </div>


        {/*Evento Focus y Blur*/}
    </div>
  )
}

export default FourthComponent