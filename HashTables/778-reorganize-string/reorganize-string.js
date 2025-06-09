/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const hash = new Array(26).fill(0)
    let max = 0;
    let maxLetter = 0;
    for(let i=0;i<s.length;i++){
        hash[s[i].charCodeAt(0)-'a'.charCodeAt(0)]++
    }
    
    for(let i=0;i<hash.length;i++){
        if(hash[i] > max ){
            max = hash[i]
            maxLetter = i;
        }
    }

    if(max > Math.floor((s.length+1)/2)){
        return ""
    }
    
    const res = new Array(s.length)
    let idx = 0
    
    while(hash[maxLetter]-- > 0){
        res[idx] = String.fromCharCode(maxLetter+97)
        idx += 2
    }
    
    for(let i=0;i<hash.length;i++){
        while(hash[i]-- > 0){
            if(idx >= res.length){
                idx = 1
            }
            res[idx] = String.fromCharCode(i+97)
            idx += 2
        }
    }
    
    return res.join("")
};