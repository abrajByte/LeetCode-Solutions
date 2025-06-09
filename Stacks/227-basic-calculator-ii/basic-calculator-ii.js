/**
 * @param {string} s
 * @return {number}
 */

var calculate = function(s) {
    let i=0
    let curr=0, prev=0, res = 0
    let op = "+"

    for(let i=0;i<s.length;i++){
        let char = s[i]
        if(!isNaN(char) && char !== ' '){
            curr = curr * 10 + Number(char)
        }

        if(isNaN(char) || i === s.length - 1){
            if(op === '+'){
                res += prev
                prev = curr
            }else if(op === '-'){
                res += prev
                prev = -curr
            }else if(op === '*'){
                prev *= curr
            }else if(op === '/'){
                prev = Math.trunc( prev / curr)
            }
            op = char
            curr = 0
        }
    }
    return res + prev
};