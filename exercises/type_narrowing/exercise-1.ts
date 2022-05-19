function toPaddedString (x: number | bigint | boolean, padding?: number | string): string {
  const inputAsString = x.toString();
  switch(typeof padding) {
    case "string": 
      return `${padding} ${inputAsString}`
    case "number": 
      return inputAsString.padStart(padding)
    case "undefined": 
    default:
      return inputAsString;
  }
}

console.log(toPaddedString(12, 6)) // "    12"
console.log(toPaddedString(277500000n)) // "277500000"
console.log(toPaddedString(true, "this is ")) // "this is true"
