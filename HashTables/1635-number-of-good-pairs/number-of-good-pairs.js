/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 total no of next occurence pair will be =  
 prev. total no of occurence of that number + 
 pre. number of element all ready have

 EX: 1 -> 0pair
    11 -> 1pair
    111 -> 3pair
    1111 -> 6pair

 */
var numIdenticalPairs = function(nums) {
    const map = new Map() // [count, paredAllHave]
    
    for(let num of nums){
        if(map.has(num)){
            const v = map.get(num)
            map.set(num, [ v[0]+1, v[0]+v[1] ]) // prev no of pair + prev no of count
        }else{
            map.set(num, [1, 0])
        }
       
    }
    const sum = [...map.entries()].reduce((acc, [key,val])=> {
        return acc +val[1]
    },0)
    return sum
};