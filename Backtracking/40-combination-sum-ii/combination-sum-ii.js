/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=> a-b)
    const res = []
    
    const backtrack = (indx, ds, target)=>{
        if(target == 0){
            res.push([...ds])
            return
        }
        for(let i=indx;i<candidates.length;i++){
            if(i > indx && candidates[i] == candidates[i-1]){
                continue
            }
            if(candidates[i] > target){
                break
            }
            ds.push(candidates[i])
            backtrack(i+1, ds, target-candidates[i])
            ds.pop()
        }
    }
    backtrack(0, [], target)
    return res
};