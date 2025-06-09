/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const map = new Map()

var encode = function(longUrl) {
    let sum = longUrl.length
    for(let char of longUrl){
        sum += char.charCodeAt(0)
    }

    let shortUrlCode = "http://tinyurl.com/"
    while(sum > 0){
        const digit = sum%10
        shortUrlCode += String.fromCharCode(97+digit)
        sum = Math.floor(sum/10)
    }
    map.set(shortUrlCode, longUrl)
    return shortUrlCode
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */