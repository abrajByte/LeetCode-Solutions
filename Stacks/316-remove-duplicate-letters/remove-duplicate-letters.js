/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const freq = new Array(26).fill(0)
    const seen = new Array(26).fill(false)
    const stack = []

    for(let char of s){
        freq[char.charCodeAt(0)-'a'.charCodeAt(0)]++
    }

    for(let char of s){
        const charIndex = char.charCodeAt(0)-'a'.charCodeAt(0)
        if(!stack.length){
            stack.push(char)
            freq[charIndex]--
            seen[charIndex] = true
            continue
        }
        if(seen[charIndex]){
            freq[charIndex]--
            continue
        }
        while(stack[stack.length-1] > char && freq[stack[stack.length-1].charCodeAt(0)-'a'.charCodeAt(0)]){
            seen[stack[stack.length-1].charCodeAt(0)-'a'.charCodeAt(0)] = false
            stack.pop()
        }
        stack.push(char)
        freq[charIndex]--
        seen[charIndex] = true
    }
    return stack.join("")
};