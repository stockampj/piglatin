$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var userInput = "arly";
    var characters = [];
    var vowels = ["a", "e", "i", "o", "u", "y"];

    function vowelWord(word) {
      return (word + "ay");
    }

    function consonantWord(word, characters) {
      characters = word.split('');
      var firstLetter = word.slice(0, 1);
      var truncated = word.slice(1);
      return truncated + firstLetter + "ay";
    }

    function wordCruncher(word) {
      characters = word.split('');
      var firstLetter = characters[0];
      var vowelCheck = vowels.indexOf(firstLetter);
      if (vowelCheck > 0) {
      console.log(vowelCheck);
        return true;
      } else {
        return false;
      }
    }

    var output = wordCruncher(userInput);
    console.log(output);
  });
});


// ("a" || "e" || "i" || "o" || "u" || "y")
//
// ((characters[0] !== "a") || (characters[0] !== "e") || (characters[0] !== "i") || (characters[0] !== "o") || (characters[0] !== "u") || (characters[0] !== "y"))
