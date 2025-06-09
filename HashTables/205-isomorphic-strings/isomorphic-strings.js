/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = new Map()
    
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            const char = map.get(s[i])
            if(char != t[i]){
                return false
            }
        }else{
            for(let v of map.values()){
                if(v == t[i]){
                     return false
                }
            }
            map.set(s[i], t[i])
        }
    }
    return true
};