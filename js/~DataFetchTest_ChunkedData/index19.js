const arrayChunks = (array, size) => Array(Math.ceil(array.length / size)).fill()
  .map((entry, index) => index * size)
  .map(begin => array.slice(begin, begin + size));

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunks = arrayChunks(values, 4);

const chunk = chunks[1];

console.log('Created chunks:', chunks);
console.log('A single chunk:', chunk);