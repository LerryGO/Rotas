import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

export default function MuscularHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/">Menu</Link> </li>
                    <li> <Link to="/">Voltar</Link> </li>
                    <li> <Link to="/Muscular">Cabeça</Link> </li>
                    <li> <Link to="/Muscular">Pescoço</Link> </li>
                    <li> <Link to="/Muscular">Tronco</Link> </li>
                    <li> <Link to="/Superiores">Superiores</Link> </li>
                    <li> <Link to="/Muscular">Inferiores</Link> </li>
                </ul>
            </nav>
        </header>
    )
}