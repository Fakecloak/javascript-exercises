const palindromes = function (n) {
    let word = n.toLowerCase().replace(/[^a-z0-9]/gi, '')
    let reverse= word.split('').reverse().join('');
    return reverse === word;
    // if (reverse == word){
    //     //console.log("palindrome")
    //     return true
    // }
    // return false
};

// Do not edit below this line
module.exports = palindromes;
