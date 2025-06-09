/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0
    let b1 = 0
    let b2 = 0
    for(let i=0;i<nums.length;i++){
        xor ^= nums[i]
    }
    xor = (xor&(xor-1))^xor
    for(let i=0;i<nums.length;i++){
        if(xor&nums[i]){
            b1 ^= nums[i]
        }else{
            b2 ^= nums[i]
        }
    }
    return [b1, b2]
};