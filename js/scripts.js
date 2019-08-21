$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var userInput = "rarly";
    var characters = [];
    var vowels = ["a", "e", "i", "o", "u", "y"];

    function vowelChecker(letter) {
      var vowelCheck = vowels.indexOf(letter);
      if (vowelCheck >= 0) {
        return true;
      } else {
        return false;
      }
    }


    function vowelWord(word) {
      return (word + "ay");
    }

    function consonantWord(word, characters) {
      characters = word.split('');
      var firstLetter = word.slice(0, 1);
      var truncated = word.slice(1);
      return truncated + firstLetter + "ay";
    }


    var output = vowelChecker("g");
    console.log(output);
  });
});


// ("a" || "e" || "i" || "o" || "u" || "y")
//
// ((characters[0] !== "a") || (characters[0] !== "e") || (characters[0] !== "i") || (characters[0] !== "o") || (characters[0] !== "u") || (characters[0] !== "y"))




// function wordCruncher(word) {
//   characters = word.split('');
//   var firstLetter = characters[0];
//   var vowelCheck = vowels.indexOf(firstLetter);
//   console.log(vowelCheck);
//   if (vowelCheck >= 0) {
//   console.log(vowelCheck);
//     return true;
//   } else {
//     return false;
//   }
// }
