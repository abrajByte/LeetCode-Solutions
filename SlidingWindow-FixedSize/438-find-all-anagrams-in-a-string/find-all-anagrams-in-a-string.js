/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
     const sArr = new Array(26).fill(0)
    let resArr = []
    
    for(const char of p){
        sArr[char.charCodeAt(0)-'a'.charCodeAt(0)]++
    }
    const str = sArr.join("#")
    const plen = p.length
    for(let i=0;i<s.length;i++){
        const tArr = new Array(26).fill(0)
        for(let j=i;j<= i+plen-1 ;j++){
            if(j > s.length-1){
                break
            }
            tArr[s[j].charCodeAt(0) -'a'.charCodeAt(0)]++
        }
        if(tArr.join("#") == str){
            resArr.push(i)
        }
    }
    
    return resArr
};