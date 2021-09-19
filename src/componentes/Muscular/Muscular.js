import React from 'react'
import Titulo from '../Titulo/Titulo.js'
import './Muscular.css'
import MuscularHeader from './MuscularHeader.js'

export default function Muscular() {
    return (
        <div>
            <Titulo texto="Seção de Muscular!" />
            
            <div className="muscular">
            <MuscularHeader />
            </div>
        </div>
    )
}