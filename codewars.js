function numObj(s) {
  return s.map((number) => ({
    [String(number)]: String.fromCharCode(number),
  }));
}

// Example usage:
const numbers = [11, 58, 23]; // Array of numbers
const result = numObj(numbers);

console.log(result);
