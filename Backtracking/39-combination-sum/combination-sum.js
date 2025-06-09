/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    
    const backtrack = (indx, ds, target)=>{
        if(indx == candidates.length || target == 0){
            if(target == 0){
                res.push([...ds])
            }
            return
        }
        if(candidates[indx] <= target){
            ds.push(candidates[indx])
            backtrack(indx, ds, target-candidates[indx])
            ds.pop()
        }
        backtrack(indx+1, ds, target)
    }
    backtrack(0, [], target)
    return res
};