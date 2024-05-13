import { useState } from 'react';

const GeneradorPersonajeDnD = () => {
  const [personaje, setPersonaje] = useState({
    fuerza: 0,
    destreza: 0,
    constitucion: 0,
    inteligencia: 0,
    sabiduria: 0,
    carisma: 0,
    puntosVida: 0,
    generado: false,
  });

  const lanzarDado = (caras: number) => {
    return Math.floor(Math.random() * caras) + 1;
  };

  const generarPuntuacionHabilidad = () => {
    const puntuaciones = {
      fuerza: generarPuntuacion(),
      destreza: generarPuntuacion(),
      constitucion: generarPuntuacion(),
      inteligencia: generarPuntuacion(),
      sabiduria: generarPuntuacion(),
      carisma: generarPuntuacion(),
    };
    return puntuaciones;
  };

  const generarPuntuacion = () => {
    const tiradas = Array.from({ length: 4 }, () => lanzarDado(6));
    tiradas.sort().shift();
    return tiradas.reduce((acumulador, actual) => acumulador + actual, 0);
  };

  const calcularPuntosVida = (constitucion: number) => {
    const modificadorConstitucion = Math.floor((constitucion - 10) / 2);
    return 10 + modificadorConstitucion;
  };

  const generarPersonaje = () => {
    const habilidades = generarPuntuacionHabilidad();
    const puntosVida = calcularPuntosVida(habilidades.constitucion);
    setPersonaje({ ...habilidades, puntosVida: puntosVida, generado: true });
  };
  return (
    <div>
      <h1>Generador de Personajes</h1>
      <button onClick={generarPersonaje}>Generar</button>
      {personaje.generado && (
        <div>
          <h2>Habilidades</h2>
          <ul>
            <li>Fuerza: {personaje.fuerza}</li>
            <li>Destreza: {personaje.destreza}</li>
            <li>Constitución: {personaje.constitucion}</li>
            <li>Inteligencia: {personaje.inteligencia}</li>
            <li>Sabiduría: {personaje.sabiduria}</li>
            <li>Carisma: {personaje.carisma}</li>
          </ul>
          <h2>Puntos de Vida</h2>
          <p>{personaje.puntosVida}</p>
        </div>
      )}
    </div>
  );
};

export default GeneradorPersonajeDnD;