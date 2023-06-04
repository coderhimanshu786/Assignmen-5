//Approach
// We will pick each element one by one from the first array to verify the output. For the first element, 4 we do not have any corresponding element in the second array that has a minimum absolute difference of 2 with it. The same goes for 5. But if we see the last element, 8, there exists an element with the same value in the second array. Thus 8, is not considered into the answer. The answer will thus become equal to 2 because of the first 2 elements of the first array.
//Complexity
//Time complexity:O(logn)
//Space complexity:O(1)

let findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  let arr2Length = arr2.length;
  for (let i = 0; i < arr1.length; i++) {
    localCount = 0;
    for (let j = 0; j < arr2Length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) break;
      else localCount++;
    }
    if (arr2Length === localCount) count++;
  }

  return count;
};

console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2));
