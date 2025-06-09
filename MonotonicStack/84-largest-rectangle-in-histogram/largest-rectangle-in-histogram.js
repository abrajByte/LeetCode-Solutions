/**
 * @param {number[]} heights
 * @return {number}
 */

//  var nseF = function(nums) {
//     const stack = []
//     const res = new Array(nums.length)
    
//     for(let i=nums.length-1;i>=0;i--){
//         while(stack.length && stack[stack.length-1] > nums[i]){
//             stack.pop()
//         }
//         res[i] = stack[stack.length-1] ?? nums.length
//         stack.push(nums[i])
//     }
//     return res
    
// }

// var pseF = function(nums){
//     const stack = []
//     const res = new Array(nums.length)
    
//     for(let i=0;i<nums.length;i++){
//         while(stack.length && stack[stack.length-1] > nums[i]){
//             stack.pop()
//         }
//         res[i] = stack[stack.length-1] ?? -1
//         stack.push(nums[i])
//     }
    
//     return res
// }

var largestRectangleArea = function(heights) {
    // const nse = nseF(heights)
    // const pse = pseF(heights)
    const stack = []
    let maxArea = 0

    for(let i=0;i<heights.length;i++){
        // while poping, we get the nse for the poped element that is current element
        // and pse is nothing but the top of the stack for that index after poped
       while(stack.length && heights[stack[stack.length-1]] >= heights[i]){
        const element = stack.pop()
        const nse = i
        const pse = stack[stack.length-1] ?? -1
        maxArea = Math.max(maxArea, heights[element]*(nse - pse -1))
       }
       stack.push(i)
    }

    while(stack.length){
        const element = stack.pop()
        nse = heights.length
        pse = stack[stack.length-1] ?? -1
        maxArea = Math.max(maxArea, heights[element]*(nse - pse -1))
    }
    return maxArea
};