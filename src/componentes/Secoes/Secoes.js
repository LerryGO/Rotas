import React from "react"
import './Secoes.css';

export default function Secoes() {

  return (
    <div>
      <div className = "menu">
        <nav className="navMenu">
          <ul>
            <li> <a href='#inicio'>Home</a> </li>
            <li> <a href='#esqueletico'>Esquelético</a> </li>
            <li> <a href='#articular'>Articular</a> </li>
            <li> <a href='#muscular'>Muscular</a> </li>
            <li> <a href='#cardiovascular'>Cardiovascular</a> </li>
            <li> <a href='#respiratorio'>Respiratorio</a> </li>
          </ul>
        </nav>
      </div>
      <section id="inicio">
        <h2> Início </h2>

        <aside className="aside">
            <a href='#inicio' id="inicio2">Nosso Canal</a>
            <a href='#esqueletico' id="esqueletico2">Esquelético</a>
            <a href='#articular'id="articular2">Articular</a>
            <a href='#muscular'id="muscular2">Muscular</a>
            <a href='#cardiovascular'id="cardiovascular2">Cardiovascular</a>
            <a href='#respiratorio'id="respiratorio2">Respiratorio</a>
        </aside>
      </section>

      <section id="esqueletico">
        <h2> Esquelético </h2>
      </section>

      <section id="articular">
        <h2> Articular </h2>
      </section>

      <section id="muscular">
        <h2> Muscular </h2>
      </section>

      <section id="cardiovascular">
        <h2> Cardiovascular </h2>
      </section>

      <section id="respiratorio">
        <h2> Respiratorio </h2>
      </section>

      <a className = "irTopo" href = ".menu">Topo</a>
      <a className = "irEsqueletico" href = "#esqueletico">Início</a>
      <a className = "irArticular" href = "#articular">Cursos</a>
      <a className = "irMuscular" href = "#muscular">Contatos</a>
      <a className = "irCardiovascular" href = "#cardiovascular">Parceiros</a>
      <a className = "irRespiratorio" href = "#respiratorio">Missão</a>


      <footer>
        <h3>Rodapé</h3>
      </footer>

    </div>
  );

}
