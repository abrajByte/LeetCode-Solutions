/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0, high = nums.length-1
    let ans = nums.length

    while(low <= high){
        const mid = Math.floor((low + high) / 2)
        if(nums[mid] >= target){
            high = mid - 1
            ans =  mid
        }else{
            low = mid + 1
        }
    }
    return ans
};