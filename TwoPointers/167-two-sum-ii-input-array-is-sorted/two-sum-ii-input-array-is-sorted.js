/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i=0;
    let j= numbers.length-1
    
    while(i<j){
        const currSum = numbers[i] + numbers[j]
        if(currSum == target){
            return [i+1,j+1]
        }else if(currSum >target){
            j--
        }else{
            i++
        }
    }
};