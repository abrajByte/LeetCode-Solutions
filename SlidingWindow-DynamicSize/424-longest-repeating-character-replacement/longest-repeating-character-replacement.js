/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const hashFreq = new Array(26).fill(0)
    let maxLen = 0
    let maxFreq = 0
    let r=0, l = 0

    while(r < s.length){
        let index = s[r].charCodeAt(0)-'A'.charCodeAt(0)
        hashFreq[index]++
        maxFreq = Math.max(maxFreq, hashFreq[index])

        if((r-l+1)-maxFreq <= k){
            maxLen = Math.max(maxLen, r-l+1)
        }else{
            index = s[l].charCodeAt(0)-'A'.charCodeAt(0)
            hashFreq[index]--
            l++
        }
        r++
    }
    return maxLen
};