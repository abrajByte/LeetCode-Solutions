/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0
    let high = nums.length - 1
    let min = Infinity
    while(low <= high){
        const mid = Math.floor((low+high)/2)
        min = Math.min(min, nums[mid])
        if(nums[high] < nums[mid]){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return min
};