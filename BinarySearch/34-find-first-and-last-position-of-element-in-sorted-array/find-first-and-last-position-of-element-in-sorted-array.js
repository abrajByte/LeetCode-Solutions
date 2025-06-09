/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var getLowerBound = function(nums, target){
    let lowerBound = nums.length
    let low = 0, high = nums.length - 1

    while(low <= high){
        const mid = Math.floor((low+high)/2)

        if(nums[mid] >= target){
            high = mid - 1
            lowerBound = mid
        }else{
            low = mid + 1
        }
    }
    return lowerBound
}

var getUpperBound = function(nums, target){
    let upperBound = nums.length
    let low = 0, high = nums.length - 1

    while(low <= high){
        const mid = Math.floor((low+high)/2)

        if(nums[mid] > target){
            high = mid - 1
            upperBound = mid
        }else{
            low = mid + 1
        }
    }
    return upperBound - 1
}

var searchRange = function(nums, target) {
    const lb = getLowerBound(nums, target)
    if(lb === nums.length || nums[lb] !== target){
        return [-1, -1]
    }
    return [ lb, getUpperBound(nums, target)]
};