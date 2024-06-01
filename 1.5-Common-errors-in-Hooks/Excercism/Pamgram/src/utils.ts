// src/utils.ts
export function isPangram(paragraph: string): boolean {
    return new Set(paragraph.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
}
