/**
 * @param {string} s
 * @return {string}
 */
 // using heap priority queue
//  var frequencySort = function(s) {
//     const freqMap = new Map()

//     for(const char of s){
//         freqMap.set(char, (freqMap.get(char) || 0) + 1)
//     }

//     const sortedChars = [...freqMap.entries()].sort((a,b) => b[1] - a[1])

//     let result = ''
//     for(const [char, frew] of sortedChars){
//         result += char.repeat(freq)
//     }
//     return result
//  }
var frequencySort = function(s) {
    const freqMap = new Map()

    for(const char of s){
        freqMap.set(char, (freqMap.get(char) || 0) + 1)
    }

    const buckets = new Array(s.length + 1).fill(null).map(() => [])

    for(const [char, freq] of freqMap){
        buckets[freq].push(char)
    }

    let result = ''
    for(let i=buckets.length - 1;i > 0 ;i--){
        for(const char of buckets[i]){
            result += char.repeat(i)
        }
    }
    return result
};