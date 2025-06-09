/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
 // brute force, O(n^2) TLE in some scenario
// var longestSubarray = function(nums, limit) {
//     let l = 0
//     let r = 0
//     let maxLen = 0
//     let maxIndx = r
//     let minIndx = l
    
//     while(r < nums.length && l <= r){
//         const diff = nums[maxIndx] - nums[minIndx]
//         if(diff <= limit){
//             maxLen = Math.max(maxLen, r-l+1)
//             r++
//             if(nums[r] > nums[maxIndx]){
//                 maxIndx = r
//             }
//             if(nums[r] < nums[minIndx]){
//                 minIndx = r
//             }
//         }else{
//             l++
//             if(maxIndx < l){
//                 maxIndx = l
//             }
//             if(minIndx < l){
//                 minIndx = l
//             }
//             for(let j=l;j<=r;j++){
//                 if(nums[j] > nums[maxIndx]){
//                     maxIndx = j
//                 }
//                 if(nums[j] < nums[minIndx]){
//                     minIndx = j
//                 }
//             }    
//             maxLen = Math.max(maxLen, r-l+1)
//         }
        
//     }
//     return maxLen
// };

var longestSubarray = function(nums, limit) {
    const maxDeque = [] // manDeque to maintain the order in decreasing order, so on top at 0th index max number will be present
    const minDeque = [] // min dequeue to maintain the order in the increasing order, so on the top at 0th index min number will be present
    let l = 0, maxLen =0

    for(let r=0;r<nums.length;r++){

        while(maxDeque.length && nums[maxDeque.at(-1)] < nums[r]){
            maxDeque.pop()
        }
        maxDeque.push(r)

        while(minDeque.length && nums[minDeque.at(-1)] > nums[r]){
            minDeque.pop()
        }
        minDeque.push(r)

        while(nums[maxDeque[0]] - nums[minDeque[0]] > limit){
            l++
            if(maxDeque[0] < l){
                maxDeque.shift()
            }

            if(minDeque[0] < l){
                minDeque.shift()
            }
        }

        maxLen = Math.max(maxLen, r-l+1)
    }
    return maxLen
};