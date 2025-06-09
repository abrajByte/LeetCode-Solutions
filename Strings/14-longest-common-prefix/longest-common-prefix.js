/**
 * @param {string[]} strs
 * @return {string}
 */

 /*
OTHER Approach:
let prefix = str[0]
for(let i=0;i<strs.length;i++){
    while(strs[i].indexOf(prefix) !== 0){
        prefix = prefix.substring(0, prefix.length-1)
        if(prefix == ""){
            return ""
        }
    }
}
return prefix

 */
var longestCommonPrefix = function(strs) {
    let t = ""
    let i=0
    while(i < strs[0].length){
        let s = strs[0][i]
        for(let j=1;j<strs.length;j++){
            if(strs[j].length-1 < i || strs[j][i] != s){
                return t
            }
        }
        i++
        t += s
    }
    return t
};