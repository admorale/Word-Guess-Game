var brands = ["ford", "chevrolet", "bentley", "daihatsu", "honda", "hyundai", "infinity", "lamborghini", "lexus", "maserati", "mazda", "mercury", "mitsubishi", "nissan", "peugeot", "suzuki", "toyota", "volkswagen"];
var logo;
var word;
var slot = [];
var fakeSlot = [];
var innerFakeSlot;

document.getElementById("restart").onclick = function(){
    word = brands[Math.floor(Math.random() * brands.length)];
    console.log(word);
    document.getElementById("slots").innerHTML = ("");
    // try to append one block for each letter in the word var
    for( i=0; i < word.length; i++) {
      var letterSlot = word[i];
      slot.push(word[i]);
      fakeSlot.push(" _ ");
        for (j=0; j < fakeSlot.length; j++) {
          innerFakeSlot = fakeSlot[j];
        }
      document.getElementById("slots").innerHTML += (innerFakeSlot); 
    }
};

document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      console.log("key pressed: " + userGuess);

      for(i=0; i < slot.length; i++) {
        //var letter = word[i];
        //console.log(letter);
        if (userGuess == slot[i]) {
          var index = slot.indexOf (userGuess);
          fakeSlot[index]=userGuess;
          for (j=0; j < fakeSlot.length; j++) {
            innerFakeSlot = fakeSlot[j];
          }
          document.getElementById("slots").innerHTML = (innerFakeSlot); 
          }
        }
      };

      // Only run the following code block if the user presses "r" or "p" or "s".
      //if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

  
      //};