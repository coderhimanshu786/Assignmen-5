//let first initialize empty array to store the non duplicate number array
//then iterate over an array
//use Math.absolute for an array
//if nunums[curr-1] < 0push the current value else nums[curr - 1] reutrns -1
//Complexity
//Time complexity:O(n)
//Space complexity:O(1)

var findDuplicates = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++){
        let curr = Math.abs(nums[i])
        if (nums[curr - 1] < 0) res.push(curr)
        else nums[curr - 1] *= -1
    }
    return res;
};

console.log(`The duplicates number in a given array is `, findDuplicates([4,3,2,7,8,2,3,1]));