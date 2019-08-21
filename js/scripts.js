$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var characters = [];
    var vowels = ["a", "e", "i", "o", "u", "y"];
    var regex = /[^a-z0-9- ]/g
    var userInput = $("#phrase").val().toLowerCase().replace(regex, "").split(" ");
    console.log(userInput);

    //checks to see if a particular character is a vowel
    function vowelChecker(letter) {
      var vowelCheck = vowels.indexOf(letter);
      if (vowelCheck >= 0) {
        return true;
      } else {
        return false;
      }
    }

    //checks to find the location of the first vowel in a string
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

    function transformer(word, slicer) {
      characters = word.split('');
      var firstSegment = word.slice(0, slicer);
      var secondSegment = word.slice(slicer);
      if ((vowelChecker(characters[0]) === true) && (characters[0] !== "y" )) {
        return secondSegment + firstSegment.toUpperCase() + "way";
      } else {
        return secondSegment + firstSegment.toUpperCase() + "ay";
      }
    }

    function determinator(word) {
      characters = word.split('');
      var firstLetter = characters[0];
      var slicer = vowelLocator(word);

      if (firstLetter === "y") {
        return transformer(word, 0);
      } else if ((characters[slicer] === "u") && (characters[slicer - 1] === "q")) {
        return transformer(word, slicer + 1);
      } else if (vowelChecker(firstLetter) === true) {
        return transformer(word, 0);
      } else {
        return transformer(word, slicer);
      }
    }



    userInput.forEach(function(word) {
      output = determinator(word);
      $(".display").append(output + " ");
    });
  });
});
