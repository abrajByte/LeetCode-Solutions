/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const n = nums.length
    if(n < 2){
        return 0
    }else{
        if(nums[0] > nums[1]){
            return 0
        }else if(nums[n-1] > nums[n-2]){
            return n-1
        }
    }
    let low = 1
    let high = n-2

    while(low <= high){
        const mid = Math.floor((low+high)/2)

        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]){
            return mid
        }else if(nums[mid] > nums[mid-1]){
                low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1
};