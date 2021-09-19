import React from 'react'
import Titulo from '../Titulo/Titulo.js'
import './Esqueletico.css'

export default function Esqueletico() {
    return (
        <div>
            <Titulo texto="Seção de Esquelético!"/>
            <div className="esqueletico">
            </div>
        </div>
    )
}