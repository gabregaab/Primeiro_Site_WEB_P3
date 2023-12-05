import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/index.css'

import Footer from './footer'
import { redirect } from 'react-router-dom'

function redirecionar(){
  window.location.replace('/home')
}

function App() {
  const [name, setName] = useState("")

  const changeName = (props) => {
    setName(props.App);
  }

  return (
    <>
    <header>
      <div className='logo'>
       <h1><img src="src/img/logobola.png"></img></h1>
      </div>
      <div className='caixa'>
        <nav>
            <ul>
                  <li><a href="/login">LOGIN</a></li>
                  <li><a href="/home">HOME</a></li>
                  <li><a href="/produtos">PRODUTOS</a></li>                    
                  <li><a href="formulario.html">Trabalhe conosco</a></li>
            </ul>
        </nav>
      </div>
    </header>
    <h2>Nome: {name}</h2>
    <main>
        <ul class="produtos">
        <li>
            <h2>Email</h2>
            <div class="campo">
                <label for="nome"><strong>Email</strong></label>
                <input type="text" value={name} name="nome" onChange={e => setName(e.target.value)} id="nome" required ></input>
                
            </div>
        </li>
        <li>
            <h2>Senha</h2>
            <div class="campo">
                <label for="nome"><strong>Senha</strong></label>
                <input type="text" name="nome" id="nome" required ></input>
            </div>
        </li>
        </ul>
        <div class="buttomCadastro">
            <button id="Cadastro" onClick={() => redirecionar()} type="button">ENTRAR</button>
        </div>
      </main>

      <Footer img src="src/img/Bola torta.png">
        <p>Copyright Barbearia Bola Torta - 2023</p>
        <p>barbeariabolatorta@gmail.com</p>
      </Footer>
  
    </>

    
  )
}

export default App
