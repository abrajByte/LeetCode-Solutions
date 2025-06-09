/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const wordL = words[0].length
    const totalL = words.length * wordL
    const wordCount = new Map()
    words.forEach(word => wordCount.set(word, (wordCount.get(word) || 0) + 1))
    const result = []

    for(let i=0; i < wordL; i++){
        let left = i, windowCount = new Map(), matches = 0

        for(let right = i; right + wordL <= s.length; right += wordL){
            const word = s.substring(right, right + wordL)

            if(wordCount.has(word)){
                windowCount.set(word, (windowCount.get(word) || 0) + 1)

                if(windowCount.get(word) === wordCount.get(word)){
                    matches++
                }

                while(right - left >= totalL){
                    const leftWord = s.substring(left, left + wordL)
                    if(wordCount.has(leftWord)){
                        if(windowCount.get(leftWord) === wordCount.get(leftWord)){
                            matches--
                        }
                        windowCount.set(leftWord, windowCount.get(leftWord) -1)
                    }
                    left += wordL
                }

                if(matches === wordCount.size){
                    result.push(left)
                }
            }else{
                windowCount.clear()
                matches = 0
                left = right + wordL
            }
        }
    }
    return result
}