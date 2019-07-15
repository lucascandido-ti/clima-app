import React from 'react'

const Input = (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Cidade"/>
        <input type="text" name="country" placeholder="Pais"/>
        <button>Obter</button>

    </form>
)

export default Input;