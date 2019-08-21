$(document).ready(function() {
  $("form#userInput").submit(function(event) {
      event.preventDefault();

      var userInput = $("#phrase").val();
      console.log(userInput);
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

      function vowelLocator(word) {
        var array = [];
        characters = word.split('');
        characters.forEach(function(character) {
          if (vowelChecker(character) === true) {
            array.push(true);
          } else if (vowelChecker(character) === false) {
            array.push(false);
          };
        });
        indexMarker = array.indexOf(true);
        return indexMarker;
      }

      //processor for word that starts with vowels
      function vowelWord(word) {
        return (word + "way");
      }
      //processor for word that starts with consonants
      function consonantWord(word, characters) {
        characters = word.split('');
        chunk = vowelLocator(word);
        var firstSegment = word.slice(0, chunk);
        var secondSegment = word.slice(chunk);
        return secondSegment + firstSegment.toUpperCase() + "ay";
      }
      //processor for word that starts with qu
      function qWord(word) {
        characters = word.split('');
        var firstVowel = vowelLocator(word);
        var firstSegment = word.slice(0, firstVowel+1);
        var secondSegment = word.slice(firstVowel+1);
        return secondSegment + firstSegment.toUpperCase() + "ay";
      }
      //processor for determining which function to call for a word
      function wordCruncher(word) {
        characters = word.split('');
        var firstLetter = characters[0];
        var firstVowel = vowelLocator(word);
        if ((characters[firstVowel] === "u") && (characters[firstVowel-1] === "q")) {
        return qWord(word);
      } else if (vowelChecker(firstLetter) === true) {
        return vowelWord(word);
      } else {
        return consonantWord(word);
      }
    }

    // var output = vowelLocator(userInput)
    var output = wordCruncher(userInput); console.log(output);
  });
});
