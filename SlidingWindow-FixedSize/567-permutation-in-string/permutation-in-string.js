/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

 /*

    const s1Len = s1.length
    let s1Array = new Array(26).fill(0)
    
    for(let i=0;i<s1Len;i++){
        s1Array[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    s1Array = s1Array.join("#")
    
    for(let i=0;i<s2.length-s1Len+1;i++){
        const tempArray = new Array(26).fill(0)
        for(let j=i;j<i+s1Len;j++){
            tempArray[s2[j].charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        if(s1Array == tempArray.join("#")){
            return true
        }
    }
    return false


 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length){
        return false
    }
    const s1Len = s1.length
    let s1Array = new Array(26).fill(0)
    const s2Array = new Array(26).fill(0)
    const aCode = 'a'.charCodeAt(0)
    let matches = 0
    
    for(let i=0;i<s1Len;i++){
        s1Array[s1[i].charCodeAt(0) - aCode]++
        s2Array[s2[i].charCodeAt(0) - aCode]++
    }
    
    for(let i=0;i<26;i++){
        if(s1Array[i] == s2Array[i]) matches++
    }
    for(let i=s1Len;i<s2.length;i++){
        if(matches === 26) return true
        const startIndex = s2[i-s1Len].charCodeAt(0)-aCode
        const endIndex = s2[i].charCodeAt(0)-aCode
        
        if(s2Array[startIndex] == s1Array[startIndex]) matches--
        s2Array[startIndex]--
        if(s2Array[startIndex] == s1Array[startIndex]) matches++
        
        if(s2Array[endIndex] == s1Array[endIndex]) matches--
        s2Array[endIndex]++
        if(s2Array[endIndex] == s1Array[endIndex]) matches++
    }
    
    return matches === 26
};