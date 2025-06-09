/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const map = new Map()
    map.set(0,-1)
    let total = 0

    for(let i=0;i<nums.length;i++){
        total += nums[i]
        const r = total%k
        if(!map.has(r)){
            map.set(r,i)
        }else if(i-map.get(r) > 1){
            return true
        }
    }
    return false
};