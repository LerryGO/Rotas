import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'
import Titulo from '../Titulo/Titulo'

export default function CutaneoHeader() {
    return (
        <div>
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to="/">Menu</Link> </li>
                        <li> <Link to="/Superiores">Voltar</Link> </li>
                        <li> <Link to="/Cutaneos">Medial</Link> </li>
                        <li> <Link to="/Cutaneos">Lateral</Link> </li>
                        <li> <Link to="/Cutaneos">Tendões</Link> </li>
                        <li> <Link to="/Cutaneos">Extensor</Link> </li>
                        <li> <Link to="/Cutaneos">Rotadores</Link> </li>
                    </ul>
                </nav>
            </header>
            <Titulo texto="Seção de Cutaneo!" />
            <div className="articular"/>

        </div>
    )
}