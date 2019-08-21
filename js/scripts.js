$(document).ready(function() {
  alert("hello");
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var userInput = "early";
    function vowelWord(word) {
      return (word + "ay");
    }

    function consonantWord(word) {
      var characters = [];
      characters = word.slice();
      console.log(characters)
    }
    var output = vowelWord(userInput);
    console.log(output);
  });
});
