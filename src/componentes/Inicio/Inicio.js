import React from 'react'
import './Inicio.css'
import Titulo from '../Titulo/Titulo.js'
import Logo from '../../Imagens/anatomia.jpg';

export default function Inicio() {
    return (
        <>
            <Titulo texto="MENU PRINCIPAL DO PROJETO" />
            <div className="inicio">
                <h1> Anatomia Humana</h1>
                <figure>
                    <img id="logo" src={Logo} align="center" />
                </figure>
            </div>
        </>
    )
}