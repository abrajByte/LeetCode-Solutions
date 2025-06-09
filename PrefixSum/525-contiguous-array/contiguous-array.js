/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map()
    let totalSum = 0
    let longestSubArray = 0

    for(let i=0;i<nums.length;i++){
        totalSum = nums[i] ? totalSum + 1 : totalSum - 1
        if(totalSum === 0){
            longestSubArray = Math.max(longestSubArray, i+1) 
        }else if(map.has(totalSum)){
            longestSubArray = Math.max(longestSubArray, i-map.get(totalSum)) 
        }else{
            map.set(totalSum, i)
        }
    }
    return longestSubArray
};