//Comando para instalar o styled-Component
//yarn add styled-components
//Cor do paint, background-color: rgb(70, 146, 169);

//Pesquisa CSS
//https://www.w3schools.com/css/css3_gradients.asp

//Pegando o rgb e fazendo o gradiente
//https://cssgradient.io/

import styled, {css }  from 'styled-components'

export const divTopo = styled.div`
height: 50px;
background-image: linear-gradient(to right, rgba(70, 169, 2000), rgba(70, 146, 169));
`;

export const div = styled.div`
font-family: Arial;
text-align: center;
background-image: linear-gradient(to right, rgba(70, 169, 169), rgba(70, 146, 169));
height: 430px;
`;

export const imagem = styled.div`
width: 50%;
margin: auto;
background-attachment: fixed;
height: 85px;
`;

export const section = styled.section`
background-color: white;
text-align: center;
border-radius: 5px;
border: 2px solid grey;
width: 350px;
height: 400px;
margin: auto;
`;

export const divTitulo = styled.h1`
height: 10px;
`;

export const h1 = styled.h1`
font-size: 12pt;
color: black;
height: 20px;
`;

export const p1 = styled.p`
font-size: 12pt;
height: 70px;
`;

export const p2 = styled.p`
color: black;
`;


export const input = styled.div`
width: 70%;
height: 40px;
margin: auto;

#masc{
font-size: 12px;
color: black;
}
`;


export const divAlinhar = styled.div`
width: 50%;
margin-bottom: 65px;
margin-left: auto;
margin-right: auto;
margin-top: 3px;
display: flex;

#P_Salvar_Cpf{
font-size: 12px;
color: black;
}
`;

export const radio = styled.aside`
width: 50%;
margin: auto;
#esquerdo{
}
#direito{
}
`;

export const NomeSalvar = styled.section`
width: 70%;
margin: auto;
font-size: 80%;

`;

export const divButton = styled.div`
height: 115px;
`;

export const button = styled.div`
#BT_Entrar{
width: 70%;
height: 30px;
border-radius: 8px;
border: 2px solid grey;
background-image: linear-gradient(to right, rgba(70, 169, 169), rgba(70, 146, 169));
color: white;
cursor: pointer; /*Cursor*/


}
`;


export const divRodape = styled.div`
margin-top: 10px;
`;


export const Rodape = styled.footer`
color: black;
background-color: white;
text-align: center;
border-radius: 10px;
width: 40%;
margin: auto;
`;
