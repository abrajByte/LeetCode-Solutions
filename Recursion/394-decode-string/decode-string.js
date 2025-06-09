/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if(s.indexOf('[') === -1){
        return s
    }
    let firstOpenBrc = s.indexOf('[')
    let firstCloseBrc = firstOpenBrc
    let count = 1
    while(count > 0){
        firstCloseBrc++
        if(s[firstCloseBrc] === '[') count++
        if(s[firstCloseBrc] === ']') count--
    }
    
    let numStart = firstOpenBrc - 1
    while(numStart >= 0 && !isNaN(s[numStart])) numStart--
    
    let num = Number(s.slice(numStart + 1, firstOpenBrc))
    let subStr = s.slice(firstOpenBrc+1, firstCloseBrc)
    return decodeString(s.slice(0, numStart+1) + subStr.repeat(num) + s.slice(firstCloseBrc + 1))
};