import React, { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(' ');
  const [numero2, setNumero2] = useState(' ');

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Digite um numero" onChange={(e) => setNumero(e.target.value)}></input>
        <input type="text" placeholder="Digite um numero" onChange={(e) => setNumero2(e.target.value)}></input>
      </form>
      <p>A soma dos números é  {Number(numero) + Number(numero2)}</p>

    </div>
  );
}

export default App;
