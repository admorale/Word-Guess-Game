var brands = ["ford", "chevrolet", "bentley", "daihatsu", "honda", "hyundai", "infinity", "lamborghini", "lexus", "maserati", 
  "mazda", "mercury", "mitsubishi", "nissan", "peugeot", "suzuki", "toyota", "volkswagen"];
// Global variables
var logo;
var word;
var slot = [];
var fakeSlot = [];
var fakeSlot2;
var innerFakeSlot;
var failed = 0;
var gRight = 0;
var loses =0;
var wins = 0;
var finished;
// function to restart variables and first image
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
  //wins = 0;
  var first_img = "images/guess.png";
  document.getElementById("logo-img").setAttribute("src", first_img);
};
// start or restart the game, selecting another word randomly 
document.getElementById("start").onclick = function (){
  restart();
  word = brands[Math.floor(Math.random() * brands.length)];
  console.log(word);
  //create an array (slot) with every letter of the random word. Inner loop creates a variable similar to fakeSlot without ",".
  for( i=0; i < word.length; i++) { 
    slot.push(word[i]);
    fakeSlot.push(" _ ");
    for (j=0; j < fakeSlot.length; j++) {
      innerFakeSlot = fakeSlot[j];
      }
    document.getElementById("slots").innerHTML += (innerFakeSlot);
    }
  };
//Event when a key is clicked
document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      console.log("key pressed: " + userGuess);
      // Find all the indexes of userGuess inside the array  
      var indexes = [];
      var element = userGuess;
      var idx = slot.indexOf(element);
      //check if userGuess is in the array
      // increase failed var is it's not in the array and write the letter in the guessed letters slot
      if (idx == -1){
        failed++;
        document.getElementById("guessed").innerHTML += (userGuess);
        //prueba para cambiar el numero de fallas
        if(failed == fakeSlot.length){
          document.getElementById("slots").innerHTML = ("Try again!");
          //var newImg = "images/"+word;
          console.log("original loses value: "+ loses);
          loses++;
          console.log("new loses value: "+ loses);
          document.getElementById("loses").innerHTML = loses;
      }
      } else {
      // if it's in the array, increase gRight and write the letter in the right letters slot
        while (idx != -1) {
          indexes.push(idx);
          idx = slot.indexOf(element, idx + 1);
          }  
          indexes.forEach(function(element){
            fakeSlot[element] = userGuess;
            //create a var (fakeSlot2) to remove "," from fakeSlot array
            fakeSlot2 = fakeSlot.join("");
            // replace text in slots with all letters already guessed
            document.getElementById("slots").innerHTML = (fakeSlot2);
            //increase var for number of guessed letters
            gRight++
            //solo para probar en consola
            finished = fakeSlot.length;
            console.log("finished: " + finished);
            console.log("gRight: " + gRight);
            if(gRight == fakeSlot.length){
              document.getElementById("slots").innerHTML = ("You Won!");
              var newImg = "images/"+word;
              console.log("original wins value: "+ wins);
              wins++;
              console.log("new wins value: "+ wins);
              document.getElementById("wins").innerHTML = wins;
              document.getElementById("logo-img").setAttribute("src",newImg);  
            }
            //console.log(gRight);
          })
      }      
        
        

        // finished = fakeSlot.length;
        // if(gRight == finished){
        //   document.getElementById("slots").innerHTML = ("You Won!");
        //   var newImg = "images/"+word
        //   document.getElementById("logo-img").setAttribute("src",newImg);
        //   wins++;
        //   document.getElementById("wins").innerHTML = wins;
        // }

        // moved from line 54
        // if (idx == -1){
        //   failed++;
        // } else {
        //   document.getElementById("guessed").innerHTML += (userGuess);
        // }
        // if (failed == 5){
        //   alert("Try Again!");
        //   restart();
        // }
      };
