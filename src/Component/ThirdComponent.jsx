import React from 'react'
import PropsTypes from 'prop-types'

const ThirdComponent = ({ name, lastName, card }) => {

  return (
    <div>
        <h2>Comunicacion Entre Componentes</h2>
        <ul>
            <li>{ name }</li>
            <li>{ lastName }</li>
            <li>{ card.bloodGroup }</li>
            <li>{ card.heigth }</li>
            <li>{ card.allergies }</li>

        </ul>
    </div>
  )
}

ThirdComponent.PropsTypes = {
  name: PropsTypes.string,
  lastName: PropsTypes.string,
  card: PropsTypes.object
}

export default ThirdComponent

//props = propiedades