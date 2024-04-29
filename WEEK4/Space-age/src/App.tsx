import './App.css'

import React from 'react';

interface Planets {
    [key: string]: number
}

const RATIOS: Planets = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
}

export function age(planet: string, seconds: number): number {
    return Number((seconds / 31557600 / RATIOS[planet]).toFixed(2))
}

const App: React.FC = () => {
    const planet = "earth";
    const seconds = 1000000000;
    const ageOnPlanet = age(planet, seconds);
    return (
        <div>
            <h1>Age Calculator</h1>
            <p>Age on {planet}: {ageOnPlanet} years</p>
        </div>
    );
}

export default App;
