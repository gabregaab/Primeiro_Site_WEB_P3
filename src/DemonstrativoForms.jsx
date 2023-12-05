import React from "react";

const DemonstrativoForms = (props) => {
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

        <div>
            <h2>Obrigado por querer trabalhar conosco {props.nome}</h2>
            <h2>Seu formulário foi enviado com sucesso</h2>
        </div>
        </view>

    )
}

export default DemonstrativoForms;