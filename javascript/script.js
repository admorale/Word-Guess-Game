var brands = ["ford", "chevrolet", "bentley", "daihatsu", "honda", "hyundai", "infinity", "lamborghini", "lexus", "maserati", 
  "mazda", "mercury", "mitsubishi", "nissan", "peugeot", "suzuki", "toyota", "volkswagen"];
var logo;
var word;
var slot = [];
var fakeSlot = [];
var fakeSlot2;
var innerFakeSlot;
var failed = 0;
var gRight = 0;
var loses;
var wins = 0;
var finished;

function restart(){
  document.getElementById("slots").innerHTML = ("");
  document.getElementById("guessed").innerHTML = ("");
  fakeSlot = [];
  fakeSlot2 = undefined;
  slot = [];
  failed = 0;
  gRight = 0;
  failed = 0;
  finished = 0;
  wins = 0;
  var first_img = "images/guess.png";
  document.getElementById("logo-img").setAttribute("src", first_img);
};

document.getElementById("start").onclick = function (){
  restart();
  word = brands[Math.floor(Math.random() * brands.length)];
  console.log(word);
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
        } else {
          document.getElementById("guessed").innerHTML += (userGuess);
        }
        if (failed == 5){
          alert("Try Again!");
          restart();
        }
        while (idx != -1) {
          indexes.push(idx);
          idx = slot.indexOf(element, idx + 1);
          }
          
        indexes.forEach(function(element){
          fakeSlot[element] = userGuess;
          gRight++
        })
        
        fakeSlot2 = fakeSlot.join("");
        document.getElementById("slots").innerHTML = (fakeSlot2);

        finished = fakeSlot.length;
        if(gRight == finished){
          document.getElementById("slots").innerHTML = ("You Won!");
          var newImg = "images/"+word
          document.getElementById("logo-img").setAttribute("src",newImg);
          wins++;
          document.getElementById("wins").innerHTML = wins;
        }
      };
