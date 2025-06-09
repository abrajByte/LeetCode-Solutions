/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> a-b)
    const res = []
    for(let i=0;i<nums.length;i++){
        if(i > 0 && nums[i] == nums[i-1]){
            continue; // ignore the next dup. no
        }
        let j = i+1
        let k = nums.length-1
       
        while(j < k){
             const sum = nums[i] + nums[j] + nums[k]
            if(sum < 0){
               j++
            }else if(sum > 0){
                k--
            }else{
                res.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while(j < k && nums[j] == nums[j-1]) j++ // ignore the next dup. no
                while(j < k && nums[k] == nums[k+1]) k-- // ignore the next dup. no
                
            }
            
        }
        
    }
    return res
};