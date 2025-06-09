/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = -Infinity
    let prefProduct = 1
    let sufProduct = 1

    for(let i=0; i< nums.length;i++){
        if(prefProduct === 0){
            prefProduct = 1
        }
        if(sufProduct === 0){
            sufProduct = 1
        }
        prefProduct *= nums[i]
        sufProduct *= nums[nums.length-1-i]
        maxProduct = Math.max(maxProduct, Math.max(prefProduct, sufProduct))
    }
    return maxProduct
};