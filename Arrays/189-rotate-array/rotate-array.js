/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k >= nums.length ? k%nums.length : k;

    if(k < 1){
        return nums
    }

    for(let i=0;i<Math.floor(nums.length/2);i++){
        [nums[i], nums[nums.length-1-i]] = [nums[nums.length-1-i], nums[i]]
    }

    for(let i=0;i<Math.floor(k/2);i++){
        [nums[i], nums[k-1-i]] = [nums[k-1-i], nums[i]]
    }

    for(let i=0;i< (Math.floor((nums.length-k)/2)); i++){
        [nums[i+k], nums[nums.length-1-i]] = [nums[nums.length-1-i], nums[i+k]]
    }
};