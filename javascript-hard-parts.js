const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(4);
output; // 8
const newOutPut = multiplyBy2(10);
newOutPut; // 20

function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let index in array) {
    output.push(instructions(array[index]));
  }
  return output;
}

let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
console.log(result);

function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

console.log(longest("adfasdaf", "fdsafdsa"));

function DNAStrand(dna) {
  //your code here
  const letters = dna.split("");
  let result = "";
  console.log(letters);
  for (letter of letters) {
    console.log(letter);
    switch (letter) {
      case "A":
        letter = "T";
        break;
      case "T":
        letter = "A";
        break;
      case "G":
        letter = "C";
        break;
      case "C":
        letter = "G";
        break;
    }
    result += letter;
  }

  return result;
}
console.log(DNAStrand("AAAA"));

function findShort(s) {
  const words = s.split(' ')
  let shortest = words[0].length;

  for (let word of words) {
   word.length < shortest ? shortest = word.length : null;
  }

  return shortest;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

function persistence(num) {
  let count = 0;
  let currentNumber = 0;
  const numberArray = num.toString().split('')
  console.log(numberArray)
  for( let i = 0; i < numberArray.length; i ++) {

  }
  console.log(currentNumber)
  return count
}

console.log(persistence(39))
