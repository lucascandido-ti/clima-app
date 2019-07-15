import React from 'react'

const Response = (props) =>(
    <div>
        <p>Cidade pesquisada: {props.city}</p>
        <p>Temperatura: {props.temperature}</p>
        <p>Humidade: {props.humidity}</p>
        <p>Descrição: {props.description}</p>
    </div>
)

export default Response