/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = []
    const result = new Array(nums1.length)
    const nge = new Array(nums2.length)

    for(let i=nums2.length-1;i>=0;i--){
        while(stack.length && nums2[i] >= stack[stack.length-1]){
            stack.pop()
        }
        nge[i] = stack.length ? stack[stack.length-1] : -1
        stack.push(nums2[i])
    }

    for(let i=0;i<nums1.length;i++){
        const index = nums2.indexOf(nums1[i])
        result[i] = nge[index]
    }
    return result
};