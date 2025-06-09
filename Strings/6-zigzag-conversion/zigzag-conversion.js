/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <= 1){
        return s;
    }
    let result = ""

    for(let i=0; i <numRows;i++){
        let increment = 2 * (numRows-1)

        for(let j=i; j< s.length; j = j+increment){
            result += s[j]
            if(i> 0 && i < numRows -1 && (j + increment -2*i) < s.length){
                result += s[j + increment -2*i]
            }
        }
        
    }
    return result
    
};