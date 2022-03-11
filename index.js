
// looping over all the buttons with class drum and adding an event listener 'click' to detect clicks
var length = document.querySelectorAll(".drum").length;
for (var i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {

// calling the function 'playsound' when 'click' event is triggered
    playsound(this.innerHTML);

    buttonAnimation(this.innerHTML);

  })
}

// adding event listener 'keydown' to the entire document to detect keyboard presses
document.addEventListener("keydown", function(event) {

// calling the function 'playsound' when 'keydown' event is triggered
  playsound(event.key);

  buttonAnimation(event.key);
})


// function to play sound when a button is clicked or key is pressed
function playsound(action) {
  switch (action) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3")
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3")
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3")
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3")
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3")
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3")
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3")
      audio.play();
      break;

    default:
      console.log("wrong button pressed");
  }
}


// function to create animation on click or key press
function buttonAnimation(currentKey)
{
  var key = document.querySelector("."+currentKey);

  // adding a class 'pressed' to our botton when clicked or pressed
  key.classList.add("pressed");

// removing the class 'pressed' after a delay of 0.1 sec
  setTimeout(function(){
    key.classList.remove("pressed");
  } , 100);

}
