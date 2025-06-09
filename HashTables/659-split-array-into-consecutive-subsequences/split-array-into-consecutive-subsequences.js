/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    const FM = new Map()
    const HM = new Map()
    
    for(let num of nums){
        FM.set(num, (FM.get(num) || 0) +1)
    }
 
    for(let num of nums){
        if(FM.get(num) > 0){
            if(HM.get(num) > 0){
                FM.set(num, FM.get(num)-1)
                HM.set(num, HM.get(num)-1)
                HM.set(num+1, (HM.get(num+1) || 0)+1)
            }else{
                for(let i=num;i<num+3;i++){
                    const fr = FM.get(i) || 0
                    if(fr <= 0){
                        return false
                    }
                    FM.set(i, FM.get(i)-1)
                }
                if(HM.has(num+3)){
                    HM.set(num+3, HM.get(num+3)+1)
                }else{
                    HM.set(num+3, 1)
                }
            }
        }
    }
    
    return true
};