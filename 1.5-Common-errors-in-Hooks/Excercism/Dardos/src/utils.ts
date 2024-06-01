// src/utils.ts
export function score(x: number, y: number): number {
    const dartPoint = Math.sqrt(x * x + y * y);
  
    if (dartPoint <= 1) {
      return 10;
    }
    if (dartPoint <= 5) {
      return 5;
    }
    if (dartPoint <= 10) {
      return 1;
    }
    return 0;
  }
  