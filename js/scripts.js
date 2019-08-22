$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    $(".display").text("");

//Front end logic:

    //this receives user sentences, transforms them into an array and cleans out non alpha numeric characters.
    var regex = /[^a-z0-9- ]/g
    var userInput = $("#phrase").val().toLowerCase().replace(regex, "").split(" ");

    //will take an  array of words and send each word to the determinator. Then will return transformed word in the display
    userInput.forEach(function(word) {
      output = determinator(word);
      $(".display").append(output + " ");
    });

//Back end business logic

    //this will determine where a word should be split when being turned into Pig Latin.
    function determinator(word) {
      characters = word.split('');
      var leadVowelIndex = vowelLocator(word);
      var slicer = "";
      if (characters[0] === "y") {
        slicer = 1;
      } else if ((characters[leadVowelIndex] === "u") && (characters[leadVowelIndex - 1] === "q")) {
        slicer = leadVowelIndex + 1;
      } else {
        slicer = leadVowelIndex
      }
      return transformer(word, slicer);
    }

    //this will receive a word and a place to split it. It will then rearrange it into Pig Latin.
    function transformer(word, slicer) {
      characters = word.split('');
      var firstSegment = word.slice(0, slicer);
      var secondSegment = word.slice(slicer);
      if ((vowelChecker(characters[0]) === true) && (characters[0] !== "y")) {
        return "<span id=\"secondSegment\">" + secondSegment + "</span>" + "<span id=\"firstSegment\">" + firstSegment.toUpperCase() + "</span>" + "<span id=\"ender\">" + "Way" + "</span>";
      } else {
        return "<span id=\"secondSegment\">" + secondSegment + "</span>" + "<span id=\"firstSegment\">" + firstSegment.toUpperCase() + "</span>" + "<span id=\"ender\">" + "ay" + "</span>";
      }
    }


    //checks to see if a particular character is a vowel
    function vowelChecker(letter) {
      var vowels = ["a", "e", "i", "o", "u", "y"];
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
      var indexMarker = array.indexOf(true);
      return indexMarker;
    }
  });
});
