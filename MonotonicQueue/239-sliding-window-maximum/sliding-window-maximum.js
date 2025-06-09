/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const maxDeque = []
    const res = []
    let l = 0

    for(let r=0;r<nums.length;r++){
        while(maxDeque.length && nums[maxDeque.at(-1)] < nums[r]){
            maxDeque.pop()
        }
        maxDeque.push(r)

        if(r-l+1 === k){
            res.push(nums[maxDeque[0]])
            l++
            if(maxDeque[0] < l){
                maxDeque.shift()
            }
        }
    }
    return res
};