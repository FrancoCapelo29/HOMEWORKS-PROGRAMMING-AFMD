import React from 'react';

export function twoFer(name: string = 'you'): string {
  if (name === 'Alicia') {
    return 'One for Alicia, one for me.';
  } else {
    return `One for ${name}, one for me.`;
  }
}

const MyComponent: React.FC = () => {
  const result1 = twoFer('Alicia');
  const result2 = twoFer('Jhon');
  const result3 = twoFer();

  return (
    <div>
      <p>{result1}</p>
      <p>{result2}</p>
      <p>{result3}</p>
    </div>
  );
};

export default MyComponent;
