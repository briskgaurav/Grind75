var majorityElement = function(nums) {

    nums.sort();
    let mid = Math.floor(nums.length/2)
    return nums[mid];
    
};