import React from 'react';

const nome = "Luís Miguel";

const elemento = (
  <div>
    <h1>Olá, eu sou o {nome}!</h1>
    <p>Rapadura é doce mas não é mole não</p>
  </div>
);

function App(){
  return elemento;
}

export default App;