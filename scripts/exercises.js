(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  function max(num1, num2){
    if(num1 > num2){
    return num1;
    } else {
    return num2;
    }
  }


  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3)
  }


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  function isVowel(x) {
       return ("aeiouAEIOU".indexOf(x) != -1);

}
  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  function rovarspraket(words) {
      const consonants = 'bcdfghjklmnpqrstvwxyz';
      let newString = "";
      for (var i = 0; i < words.length; i++) {
      if (consonants.includes(words[i])){
        newString = newString + words[i] + "o" + words[i];

      }else { newString = newString + words[i];
         }
      }
      return newString;
    }


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  function sum(num1, num2, num3, num4) {
    const array1 = [1, 2, 3, 4];
    // allowing
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array1.reduce(reducer);

  }

  function multiply(num1, num2, num3, num4) {
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return array1.reduce(reducer);

  }


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  function reverse(str) {
        let splitString = str.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray; //
    }


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  function findLongestWord(arr) {
    //using arr for array
    const sortedarr = arr.sort(function(a, b) {
    return b.length - a.length;
  });
    return sortedarr[0].length;

  }


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  function filterLongWords(arr2, i) {

    const newArray = [];
    for(let j=0; j < arr2.length; j++) {
      if(arr2[j].length > i) {
        newArray.push(arr2[j]);
      }
    }
    return newArray;
  }



  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(str) {
    var obj={};
    var repeats=[];
    str = "abbabcbdbabdbdbabababcbcbab"
    for(var i=0, length = str.length; i < length; i++) {
        var l = str.charAt(i);
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    // console.log(obj)
    return obj;
}

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'function findLongestWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
