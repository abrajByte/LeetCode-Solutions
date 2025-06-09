/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    const powerSet = function(indx, arr){
    if(indx >= nums.length){
        result.push([...arr])
        return
    }
    arr.push(nums[indx])
    powerSet(indx+1, arr)
    arr.pop()
    powerSet(indx+1, arr)
    }
    powerSet(0, [])
    return result
};