
// handle mouse click
let arrBtns = document.querySelectorAll('.drum');
for(let b of arrBtns) {
  b.addEventListener("click", function() {
    let btnLetter = this.innerHTML;
    makeSound(btnLetter);
    buttonAnimation(btnLetter);
  });
}

// handle keyboard click
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      sound = "sounds/tom-1.mp3";
      break;
    case "a":
      sound = "sounds/tom-2.mp3";
      break;
    case "s":
      sound = "sounds/tom-3.mp3";
      break;
    case "d":
      sound = "sounds/tom-4.mp3";
      break;
    case "j":
      sound = "sounds/snare.mp3";
      break;
    case "k":
      sound = "sounds/crash.mp3";
      break;
    case "l":
      sound = "sounds/kick-bass.mp3";
      break;
  }
  let audio = new Audio(sound);
  audio.play();
}



// show the letter that is pressed or clicked
function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add('pressed');

  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);
}
