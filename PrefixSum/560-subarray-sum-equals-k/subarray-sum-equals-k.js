/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let prefixSum = { 0: 1} // we are keeping this zero so that when we found sum 3 and want to exclude s-k=0 in that scenario this 1 count will get used.
    let res = 0
    let currSum = 0
    
    for(const num of nums){
        currSum += num
        let diff = currSum - k
        
        res += prefixSum[diff] || 0 // checking if prev sum(currSum-k) is exist, if exist then will exclude this then we can make a new subarray whose sum is k.
        prefixSum[currSum] = (prefixSum[currSum] || 0) + 1
    }
    
    return res
}; 