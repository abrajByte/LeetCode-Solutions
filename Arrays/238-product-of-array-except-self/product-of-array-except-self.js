/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1)
    let postfix = 1
    for(let i=1;i<nums.length;i++){
        result[i] = result[i-1]*nums[i-1]
    }

    for(let i=nums.length-1;i>=0;i--){
        result[i] = result[i] * postfix
        postfix = postfix * nums[i]
    }
    return result
};