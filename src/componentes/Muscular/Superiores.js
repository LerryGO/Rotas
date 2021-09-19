import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Titulo from '../Titulo/Titulo.js'
import '../Header/Header.css'

export default function SuperiorHeader() {
    return (
        <div>
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to="/">Menu</Link> </li>
                        <li> <Link to="/Muscular">Voltar</Link> </li>
                        <li> <Link to="/Superiores">Bíceps</Link> </li>
                        <li> <Link to="/Superiores">Tríceps</Link> </li>
                        <li> <Link to="/Cutaneos">Cutâneos</Link> </li>
                        <li> <Link to="/Superiores">Profundos</Link> </li>
                    </ul>
                </nav>
            </header>
            <Titulo texto="Seção de Superior!" />
            <div className="esqueletico">
            </div>
        </div>

    )
}