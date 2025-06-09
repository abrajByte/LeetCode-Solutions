/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const backtrack = (indx)=>{
        if(indx === nums.length){
            res.push([...nums])
            return
        }
        for(let i=indx;i<nums.length;i++){
            [nums[indx], nums[i]] = [nums[i], nums[indx]]
            backtrack(indx+1);
            [nums[indx], nums[i]] = [nums[i], nums[indx]]
        }
    }
    backtrack(0)
    return res
};