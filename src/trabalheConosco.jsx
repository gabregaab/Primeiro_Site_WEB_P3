import React from "react";
import './css/TrabalheConosco.css'
import Footer from "./footer";
const TrabalheConosco = () =>{

    function enviar(){
        window.location.replace('/envio')
        
    }

    return(
    <view>
        <header>
        <div className='logo'>
        <h1><img src="src/img/logobola.png"></img></h1>
        </div>
        <div className='caixa'>
          <nav>
              <ul>
                    <li><a href="/login"  >LOGIN</a></li>
                    <li><a href="/home">HOME</a></li>
                    <li><a href="/produtos">PRODUTOS</a></li>                    
                    <li><a href="/formulario">Trabalhe conosco</a></li>
              </ul>
          </nav>
        </div>
      </header>
      <main>
      <form class="principal">
        <ul class="produtos">
        <li>
            <h2>Nome Completo</h2>
            <div class="campo">
                <label for="nome"><strong></strong></label>
                <input type="text" name="nome" id="nome" required></input>
            </div>
        </li>
        <li>
            <h2>Email</h2>
            <div class="campo">
                <label for="email"><strong></strong></label>
                <input type="email" name="email" id="email" required></input>
            </div>
        </li>
        </ul>
        <div className="selecao">
        <h2>SELECIONE SUAS ESPECIALIDADES:</h2>
        <select>
        <option value="CabeloLiso">Cabelo liso</option>
        <option value="CabeloEncaracolado">Cabelo encaracolado</option>
        <option selected value="Crespo">Cabelo crespo</option>
        <option value="Tranças">Tranças</option>
        </select>
        </div>
        <div class="Experiencia">
            <br></br>
            <label for="experiencia"><strong>Conte um pouco mais da sua experiência: </strong></label>
            <textarea rows="6"  id="experiencia" name="experiencia"></textarea>
        </div>
        <div class="buttomCadastro">
            <button id="Concluido" onClick={() => enviar()} type="button">Concluído</button>
        </div>
        </form>
        </main>
        <Footer img src="src/img/Bola torta.png">
        <p>Copyright Barbearia Bola Torta - 2023</p>
        <p>barbeariabolatorta@gmail.com</p>
      </Footer>
    </view>  
    )
}

export default TrabalheConosco;