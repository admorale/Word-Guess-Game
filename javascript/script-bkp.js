var brands = ["ford", "chevrolet", "bentley", "daihatsu", "honda", "hyundai", "infinity", "lamborghini", "lexus", "maserati", "mazda", "mercury", "mitsubishi", "nissan", "peugeot", "suzuki", "toyota", "volkswagen"];
var logo;
var word;
var slot = [];
var fakeSlot = [];
var fakeSlot2;
var innerFakeSlot;

document.getElementById("restart").onclick = function(){
    word = brands[Math.floor(Math.random() * brands.length)];
    console.log(word);
    document.getElementById("slots").innerHTML = ("");
    fakeSlot = [];
    fakeSlot2 = undefined;
    slot = [];
    // try to append one block for each letter in the word var
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

      // for(i=0; i < slot.length; i++) {
      // //slot.forEach(function() {  
      //    if (userGuess == slot[i]) {
      //    //if (userGuess !== -1) {
      //     var index = slot.indexOf (userGuess);
      //     console.log(index);
      //     fakeSlot[index]=userGuess;
      //     //console.log(fakeSlot);
      //     fakeSlot2 = fakeSlot.join("");
      //     document.getElementById("slots").innerHTML = (fakeSlot2);
      //   }   

        // prueba de while con indexOf

        var indexes = [];
        var element = userGuess;
        var idx = slot.indexOf(element);
        while (idx != -1) {
          indexes.push(idx);
          idx = slot.indexOf(element, idx + 1);
          //idx = slot.indexOf(element);
          }
          console.log(indexes);

        indexes.forEach(function(element){
          fakeSlot[element] = userGuess;
        })
        
        // for (i=0; i< indexes.length; i++){
        //   fakeSlot[i] = userGuess;
          fakeSlot2 = fakeSlot.join("");
          document.getElementById("slots").innerHTML = (fakeSlot2);
        //  }
        
        
        // for (j=0; j < fakeSlot.length; j++) {
        //   innerFakeSlot = fakeSlot[j];
        //   document.getElementById("slots").innerHTML = (innerFakeSlot);
        // }
        
        //}
      //)
      };

      // Only run the following code block if the user presses "r" or "p" or "s".
      //if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

  
      //};