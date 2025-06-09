/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const word = "balloon"
    const map = new Map()
    let maxBalloon = Infinity
    
    for(let i=0;i<text.length;i++){
        map.set(text[i], (map.get(text[i]) || 0) + 1 )
    }

    for(let char of word){
        const countlt = map.get(char) || 0
        const countltRequired = (char === 'l' || char === 'o') ? 2 : 1
        maxBalloon = Math.min(maxBalloon, Math.floor(countlt/countltRequired))
    }
    return maxBalloon
};