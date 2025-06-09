/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freqMap = new Map()

    for(const word of words){
        freqMap.set(word, (freqMap.get(word) ?? 0) + 1)
    }

    const buckets = new Array(words.length + 1).fill(null).map(()=>[])

    for(const [word, freq] of freqMap){
        const bucket = buckets[freq]

        let left = 0, right = bucket.length
        while(left < right){
            let mid = Math.floor((left+right) / 2)
            if(bucket[mid] < word){
                left = mid + 1
            }else{
                right = mid
            }
        }
        bucket.splice(left, 0, word)
    }

    const result = []
  
    for(let i = buckets.length - 1; i >= 0 && result.length < k; i--){
       for(const word of buckets[i]){
        result.push(word)
        if(result.length === k){
            return result
        }
       }
    }
    return result
};