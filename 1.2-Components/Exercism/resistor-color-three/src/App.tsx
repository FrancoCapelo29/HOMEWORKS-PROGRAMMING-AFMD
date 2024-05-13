import './App.css'
import React from 'react';
import { decodedResistorValue } from './ResistorDecoder';

const ResistorDisplay: React.FC<{ colors: string[] }> = ({ colors }) => {
  const decodedValue = decodedResistorValue(colors);

  return (
    <div>
      <h2>Valor del resistor decodificado:</h2>
      <p>{decodedValue}</p>
    </div>
  );
};

export default ResistorDisplay;
