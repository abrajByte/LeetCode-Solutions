/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const map = new Map()
    let sum = 0
    let maxSum = 0

    for(let i=0;i<nums.length;i++){
        sum += nums[i]
        map.set(nums[i], (map.get(nums[i]) ?? 0)+1)

        if(i >= k){
            const leftNum = nums[i-k]
            sum -= leftNum
            map.set(leftNum, map.get(leftNum)-1)
            if(map.get(leftNum) == 0){
                map.delete(leftNum)
            }
        }

        if((i >= k-1) && map.size === k){
            maxSum = Math.max(maxSum, sum)
        }
    }
    return maxSum
};