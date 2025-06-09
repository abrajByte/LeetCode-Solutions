/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var canEatAllBanana = function(noOfBanana, piles, h){
    let totalHour = 0
    for(const pile of piles){
        totalHour += Math.ceil(pile/noOfBanana)
    }
    return totalHour <= h
}
var minEatingSpeed = function(piles, h) {
    let low = 1
    let high = Math.max(...piles)
    while(low <= high){
        const mid = Math.floor((low+high)/2)
        if(canEatAllBanana(mid, piles, h)){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return low
};