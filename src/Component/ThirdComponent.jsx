import React from 'react'

const ThirdComponent = (props) => {
    console.log(props)

  return (
    <div>
        <h2>Comunicacion Entre Componentes</h2>
        <ul>
            <li>{ props.name }</li>
            <li>{ props.lastName }</li>
            <li>{ props.card.heigth }</li>
            <li>{ props.card.bloodGroup }</li>
        </ul>
    </div>
  )
}

export default ThirdComponent

//props = propiedades