import React from "react";
import Footer from "./footer";

const home = () => {
    
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
        <ul class="produtos">
        <li>
            <h2>Cabelo</h2>
            <img src="src/img/cabelo.png" onclick="alerteCabelo()"></img>
            <p class="produto-descricao">Na tesoura ou máquina, como o cliente preferir</p>
            <p class="produto-preco">R$ 25,00</p>
        </li>
        <li>
            <h2>Barba</h2>
            <img src="src/img/barba.png" onclick="alerteBarba()"></img>
            <p class="produto-descricao">Corte e desenho profissional de barba</p>
            <p class="produto-preco">R$ 18,00</p>
        </li>
        <li>
            <h2>Cabelo+Barba</h2>
            <img src="src/img/barbaecabelo.png" onclick="alerteCabeloBarba()"></img>
            <p class="produto-descricao">Pacote completo de cabelo e barba</p>
            <p class="produto-preco">R$ 35,00</p>
        </li>
        </ul>
    </main>

    <Footer img src="src/img/Bola torta.png">
        <p>Copyright Barbearia Bola Torta - 2023</p>
        <p>barbeariabolatorta@gmail.com</p>
      </Footer>
    </view>

    
    )
}

export default home;