function isPalindrome(word) {
    // Write your algorithm here
    // itreate from the begining until the middle
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
        // compare the letter we're iterating over to the corresponding letter at the end
        const endIndex = word.length - 1 - startIndex;
        //if the letters don't match, return false
        if (word[startIndex] !== word[endIndex]) {
            return false;
        }
        return true;

    }

}

/* 
  Add your pseudocode here
  itreate from the begining until the middle
    compare the letter we're iterating over to the corresponding letter at the end
        if the letters don't match, return false
        else return true 

*/

/*
Add written explanation of your solution here
If the first letter is the same as the last letter, and the second letter
is the same as the second to last letter.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
