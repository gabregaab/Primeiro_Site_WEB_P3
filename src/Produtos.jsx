import React from "react";
import Footer from "./footer";
const Produtos = () => {
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
            <h2>Pomada de cabelo</h2>
            <img src="src/img/Pomada.jpg" onclick="CompraPomada()"></img>
            <p class="produto-descricao">Pomada barba Rubra 100g</p>
            <p class="produto-preco">R$ 35,00</p>
        </li>
        <li>
            <h2>Óleo para Barba</h2>
            <img src="src/img/OleoParaBarba.jpg" onclick="CompraOleoBarba()"></img>
            <p class="produto-descricao">Óleo para Barba Don Alcides Barba Negra 30 ml</p>
            <p class="produto-preco">R$ 69,90</p>
        </li>
        <li>
            <h2>Gel para cabelo</h2>
            <img id="imgGel" src="src/img/Gel.png" onclick="CompraGel()"></img>
            <p class="produto-descricao">Gel Cola Element 250g</p>
            <p class="produto-preco">R$ 15,00</p>
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

export default Produtos;