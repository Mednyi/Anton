'use strict'

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  const upperDNA = dna.toUpperCase().split('');
  let result = [];

  for (let char of upperDNA) {
    if (char == 'T' && upperDNA.at(-1) == 'T') {
      result.push('U');
    }
  }

  return result.join('');
}

console.log(DNAtoRNA('GCAT'));