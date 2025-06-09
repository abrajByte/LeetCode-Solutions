/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const digitToChar = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    const res = []

    const backtrack = (i, str)=>{
        if(str.length === digits.length){
            res.push(str)
            return
        }

        for(let char of digitToChar[digits[i]]){
            backtrack(i+1, str+char)
        }
    }
    if(digits.length){
        backtrack(0, "")
    }
    return res
};