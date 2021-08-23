import React from 'react';

import * as St from './styles_tela_usuario'

import logo from "./images/logo.jpg"

import Switch from './Switch'



const TelaCpf = () => {
  return (

  

    <St.div>
   {/*Div Geral*/}

  

   <St.divTopo>

   </St.divTopo>

    {/********************************************/}
    <St.imagem>
    <img src={logo}/>
    </St.imagem>
    {/**********************************************/}





    <St.section>

    <St.divTitulo>

    </St.divTitulo>

    {/**********************************************/}
    <St.h1>
    Olá, tudo bem?
    </St.h1>
    {/**********************************************/}




    {/**********************************************/}
    <St.p1>
    Entre com o seu CPF
    </St.p1>
    {/**********************************************/}




    {/**********************************************/}
    <St.p2>
    Número do CPF
    </St.p2>
    {/**********************************************/}




    {/**********************************************/}

    <St.input>
    <input type="number" name="button" id="masc"/>
    </St.input>


    <St.divAlinhar>
    <St.radio>
    <Switch />
  
    </St.radio>
    
    
    <St.NomeSalvar>
    <p id="P_Salvar_Cpf">Salvar este CPF</p>
    </St.NomeSalvar>
    {/**********************************************/}
    </St.divAlinhar>





    {/**********************************************/}


    <St.button>
      
    <input id="BT_Entrar" type="button" value="Entrar" />
    
    
    </St.button>
    {/**********************************************/}

    </St.section>

    <St.divRodape>
    {/**********************************************/}
    <St.Rodape>
    &copy;Versão: 1.0.10 (501)
    </St.Rodape>
    {/**********************************************/}
    </St.divRodape>




    {/*Div Geral*/}
    </St.div>

  );


}


export default TelaCpf;
