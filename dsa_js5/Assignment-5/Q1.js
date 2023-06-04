//Approch
//here m and n is the row and coloumn of an array
//if the original array is not equal to nxm then return returns the empty array
//initialize empty array where we can make 2D array or initialize into it
//if lengtht of array is less than m push array within it splice from start in a original array then return array.

//Complexity
//Time Complexity = O(n)
//Space Complexity = O(1)

let construct2DArray = function (original, m, n) {
  if (original.length != n * m) return [];
  let arr = [];
  while (arr.length < m) arr.push(original.splice(0, n));
  return arr;
};

console.log(
  `The 2D Array is after conversion`,
  construct2DArray([1, 2, 3, 4], 2, 2)
);
