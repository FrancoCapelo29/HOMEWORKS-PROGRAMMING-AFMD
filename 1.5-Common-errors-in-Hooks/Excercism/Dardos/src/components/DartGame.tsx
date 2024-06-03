// src/components/DartGame.tsx
import React, { useState } from 'react';
import { score } from '../utils';

const DartGame: React.FC = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculateScore = () => {
    const dartScore = score(x, y);
    setResult(dartScore);
  };

  return (
    <div>
      <h1>Calculadora de Puntos de Dardos</h1>
      <div>
        <label>
          Coordenada X:
          <input
            type="number"
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Coordenada Y:
          <input
            type="number"
            value={y}
            onChange={(e) => setY(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleCalculateScore}>Calcular Puntaje</button>
      {result !== null && <p>Puntaje: {result}</p>}
    </div>
  );
};

export default DartGame;
