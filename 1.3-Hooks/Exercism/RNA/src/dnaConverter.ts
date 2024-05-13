const DNAtoRNA = new Map<string, string>([
    ["G", "C"],
    ["C","G"],
    ["T", "A"],
    ["A", "U"]
  ]);
  
  export function toRna(dna: string): string {
    return [...dna].map(ch => {
      if (DNAtoRNA.has(ch))
        return DNAtoRNA.get(ch);
      else
        throw new Error('Invalid input DNA.');
    }).join("");
  }
  