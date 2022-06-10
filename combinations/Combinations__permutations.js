function allCombinations(items) {
    let results = [];
    for (let slots = items.length; slots > 0; slots--) {
            for (let loop = 0; loop < items.length - slots + 1; loop++) {
            let key = results.length;
            results[key] = [];
            for (let i = loop; i < loop + slots; i++) {
                results[key].push(items[i]);
            }
        }
    }
    return results;
}

//------------------------------------
function allPermutations (items) {
    let results = [];
    function permute (arr, memo) {
        var cur, memo = memo || [];
        for (let i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }
        return results;
    }
    permute(items);
    return results;
}

//------------------------------------------------
var letters = ["g", "a","o","m","e"];
var combo = allPermutations(letters);


var needed_words = [];
for (let all_words of combo){
    var formed_words = allCombinations(all_words);

    for (array1 of formed_words){
        let word = array1.join("");
        var dictionary = require('an-array-of-english-words');

        if (dictionary.includes(word)){
            if (word.length != 1 && word.length != 2){
                if (!needed_words.includes(word)){
                    needed_words.push(word);
                }
            }
        }
    }
}

//-----------------------------------------
console.log("\t\tThe following words have been formed:")
console.log(needed_words);
  
  
  
  // for every word in an array, am gonna use [1,2,3].join("");
  // for every word formed out of the array, i check if it exists in my dictionary....if yes, print it out, if no discard it
  