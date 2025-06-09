/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()
    
    for(let char of magazine){
        map.set(char, (map.get(char) || 0) + 1)
    }

    for(let char of ransomNote){
        const count = map.get(char) || 0
        if(count){
             map.set(char, count-1)
        }else{
             return false
        }
    }
   
    return true
};