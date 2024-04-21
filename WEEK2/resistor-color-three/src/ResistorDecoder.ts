export function decodedResistorValue(colors: string[]): string {
    let value =
      (10 * calculateValue(colors[0]) + calculateValue(colors[1])) *
      Math.pow(10, calculateValue(colors[2]));
    let unit = ' ohms';
    switch (true) {
      case value > 1000000000:
        unit = ' gigaohms';
        value /= 1000000000;
        break;
      case value > 1000000:
        unit = ' megaohms';
        value /= 1000000;
        break;
      case value > 1000:
        unit = ' kiloohms';
        value /= 1000;
        break;
    }
  
    return `${value}${unit}`;
  }
  
  function calculateValue(color: string): number {
    switch (color) {
      case 'black':
        return 0;
      case 'brown':
        return 1;
      case 'red':
        return 2;
      case 'orange':
        return 3;
      case 'yellow':
        return 4;
      case 'green':
        return 5;
      case 'blue':
        return 6;
      case 'violet':
        return 7;
      case 'grey':
        return 8;
      case 'white':
        return 9;
      default:
        return 0;
    }
  }
  