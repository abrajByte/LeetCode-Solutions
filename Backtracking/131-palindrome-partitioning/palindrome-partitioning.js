/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalindrome = function(s, start, end){
    while(start <= end){
        if(s[start++] !== s[end--]){
            return false
        }
    }
    return true
}
var partition = function(s) {
    const res = []

    const backtrack = (indx, path)=>{
        if(indx === s.length){
            res.push([...path])
            return
        }
        for(let i=indx;i<s.length;i++){
            if(isPalindrome(s,indx,i)){
                path.push(s.substring(indx, i+1))
                backtrack(i+1, path)
                path.pop()
            }
        }
    }
    backtrack(0, [])
    return res
};