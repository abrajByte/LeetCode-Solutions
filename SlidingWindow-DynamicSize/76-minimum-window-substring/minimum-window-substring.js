/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length){
        return ""
    }
    const freqMap = new Map()
    for(let char of t){
        freqMap.set(char, (freqMap.get(char) ||0) + 1)
    }
    let l=0, count = 0
    let minLen = Infinity, startIndex = 0

    for(let r=0;r<s.length;r++){
        if(freqMap.has(s[r])){
            freqMap.set(s[r], freqMap.get(s[r]) - 1)
            if(freqMap.get(s[r]) >= 0){
                count++
            }
        }

        while(count === t.length){
            if(r-l+1 < minLen){
                minLen = r-l+1
                startIndex = l
            }

            if(freqMap.has(s[l])){
                freqMap.set(s[l], freqMap.get(s[l]) + 1)
                if(freqMap.get(s[l]) > 0){
                    count--
                }
            }
            l++
        }
    }
    return minLen === Infinity ? "" : s.substring(startIndex, startIndex+minLen)
};