/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l = 0, r = nums.length-1
    let i=0
    while(i <= r){
        if(nums[i] == 0){
            [nums[l], nums[i]] = [nums[i], nums[l]]
            l++
        }else if(nums[i] == 2){
            [nums[r], nums[i]] = [nums[i], nums[r]]
            r--
            i-- // bcz we don't want to move i if it swapped with the 2, as there could be 0 which will move to middle and to avoid this will run the loop 1 more time toswap the 0 if it is moved to middle.
        }
        i++
    }
};