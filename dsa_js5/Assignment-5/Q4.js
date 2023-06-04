//Approach
//Create a hash set for both nums arrays. Loop over each and see if the current val is in the other set. If it's not then add it to our array

//Complexity
//Time complexity: 0(n + m)
//0(n) being nums1 and 0(m) being nums2 since we loop over both we get 0(n + m)
//Space complexity: 0(n + m)
//Creates two sets that take 0(n) for nums1 and 0(m) for nums2



var findDifference = function(nums1, nums2) {
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);
    
    const a1 = [...s1].filter(x => !s2.has(x));
    const a2 = [...s2].filter(x => !s1.has(x));
    
    return [a1, a2];
};

console.log(findDifference([1,2,3],  [2,4,6]));