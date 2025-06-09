/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const stack = [] // [greater, lesser] find the previous greater then k and lesser then k
    let currMin = nums[0]

    for(let i=1;i<nums.length;i++){
        // will previous greater then curr num
        while(stack.length && stack[stack.length-1][0] <= nums[i]){
            stack.pop()
        }
        // will give prev lesser then curr num
        if(stack.length && stack[stack.length-1][1] < nums[i]){
            return true
        }
        stack.push([nums[i], currMin])
        currMin = Math.min(currMin, nums[i])
    }
    return false
};