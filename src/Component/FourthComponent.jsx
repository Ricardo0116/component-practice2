import React from 'react'

const FourthComponent = () => {
    const handleClicked = (e) => {
        alert("Haz hecho click al boton!!!")
    }

    const handleDoubleClicked = (e) => {
        alert("Haz hecho doble click al boton!!!")
    }

// onMouserEnter y onMouseLeave con dos caja funcion
    const handleMouseEnter = (e) =>{
        console.log("Haz entrado a la caja con el mouse!!!")
    }

    const handleMouseLeave = (e) => {
        console.log("Haz salido de mi caja")
    }

// onMouserEnter y onMouseLeave con una caja funcion con Alert
    const handleMouse = (e, text) => {
        alert(`Haz ${text} la caja`)
    }

// onMouserEnter y onMouseLeave con una caja funcion con Console Log 
    const handleMouseCL = (e, text) => {
        console.log(`Haz ${text} la caja`)

        }
//onFocus
    const insideInput = (e) => {
        console.log("Estas dentro del input, escrbie tu nombre!!!")
    }
//onBlur
    const outsideInput = (e) => {
        console.log("estas afuera del INPUT, Adios!!!")
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
        <div id="box">

            <div id="box1"
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
            >
            <p>pasa el mouse por encima!!!</p>
            </div>

            <div id="box2"
                onMouseEnter={ e=> handleMouse(e, "entrado a") }
                onMouseLeave={ e=> handleMouse(e, "salido de")}
            >
            <p>pasa el mouse por encima!!!</p>
            </div>

            <div id="box3"
                onMouseEnter={ e=> handleMouseCL(e, "entrado a") }
                onMouseLeave={ e=> handleMouseCL(e, "salido de")}
            >
            <p>pasa el mouse por encima!!!</p>

            </div>
        </div>

        {/*Evento Focus y Blur*/}
        <div className='mt-4'>
            <input type="text" 
            onFocus={ insideInput }
            onBlur={ outsideInput }
            placeholder='Escribe un Nombre'
            />
        </div>
        
    </div>
  )
}

export default FourthComponent