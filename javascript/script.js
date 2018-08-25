var brands = ["ford", "chevrolet", "bentley", "daihatsu", "honda", "hyundai", "infinity", "lamborghini", "lexus", "maserati", 
  "mazda", "mercury", "mitsubishi", "nissan", "peugeot", "suzuki", "toyota", "volkswagen"];
var logo;
var word;
var slot = [];
var fakeSlot = [];
var fakeSlot2;
var innerFakeSlot;
var failed = 0;
var loses;
var wins;

function restart(){
  document.getElementById("slots").innerHTML = ("");
  fakeSlot = [];
  fakeSlot2 = undefined;
  slot = [];
};

document.getElementById("restart").onclick = function (){
    word = brands[Math.floor(Math.random() * brands.length)];
    console.log(word);
    restart();
    for( i=0; i < word.length; i++) { 
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
        var indexes = [];
        var element = userGuess;
        var idx = slot.indexOf(element);
        
        if (idx == -1){
          failed++;
        }
        if (failed == 5){
          alert("Try Again!");

          restart();
        }
        while (idx != -1) {
          indexes.push(idx);
          idx = slot.indexOf(element, idx + 1);
          }
          console.log(indexes);

        indexes.forEach(function(element){
          fakeSlot[element] = userGuess;
        })
          fakeSlot2 = fakeSlot.join("");
          document.getElementById("slots").innerHTML = (fakeSlot2);
    
      };
