import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateIMC = (event) => {
    event.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100; // Convertendo altura de cm para metros
      const imc = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      let classification = '';

      if (imc < 18.5) {
        classification = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        classification = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        classification = 'Sobrepeso';
      } else if (imc >= 30 && imc < 34.9) {
        classification = 'Obesidade grau 1';
      } else if (imc >= 35 && imc < 39.9) {
        classification = 'Obesidade grau 2';
      } else {
        classification = 'Obesidade grau 3';
      }

      setResult({ imc, classification });
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calculateIMC}>
        <div>
          <label>Altura (cm): </label>
          <input 
            type="number" 
            value={height}
            onChange={(e) => setHeight(e.target.value)} 
            placeholder="Digite sua altura em cm"
            required
          />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input 
            type="number" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)} 
            placeholder="Digite seu peso em kg"
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {result && (
        <div>
          <h2>Resultado</h2>
          <p>Seu IMC: {result.imc}</p>
          <p>Classificação: {result.classification}</p>
        </div>
      )}
    </div>
  );
}

export default App;
