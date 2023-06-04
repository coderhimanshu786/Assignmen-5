//Approch
//run funtion for Min. value
//traverse an array if nums[st] <= nums[en] break
//apply Math.floor for eact value then apply fromula
//if (nums[st]<=nums[mid])returns start = middle+1
//else end = mid

//Complexity
//Time complexity:O(logn)
//Space complexity:O(1)
let findMin = function(nums) {
    
    let st=0, en = nums.length - 1;
    while(st<=en){
        if(nums[st] <= nums[en]) break;
        let mid = Math.floor(st + (en-st)/2);
        if(nums[st]<=nums[mid]){
            st = mid+1;
        }
        else{
            en = mid;
        }
    }
    return nums[st];
};
//print an Array
console.log(findMin([3,4,5,1,2]));