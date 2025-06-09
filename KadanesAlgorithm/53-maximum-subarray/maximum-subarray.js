/**
 * @param {number[]} nums
 * @return {number}
 */


 /*
let meh = 0;
let msf = -Infinity

for(let i=0;i<nums.length;i++){
    meh += nums[i];
    if(nums[i] > meh){
        meh = nums[i]
    }
    if(meh > msf){
        msf = meh;
    }
}
return msf;
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity
    let sum = 0

    for(let num of nums){
        sum += num
        maxSum = Math.max(maxSum, sum)
        if(sum < 0){
            sum = 0
        }
    }
    return maxSum
};