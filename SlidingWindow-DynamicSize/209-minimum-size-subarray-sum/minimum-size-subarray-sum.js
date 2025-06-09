/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity
    let sum = 0
    let r=0, l=0

    while(r < nums.length){
        sum += nums[r]
        while(sum >= target){
            minLen = Math.min(minLen, r-l+1)
            sum -= nums[l]
            l++
        }
        r++
    }
    return minLen === Infinity ? 0 : minLen
};