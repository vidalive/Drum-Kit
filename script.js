
// function for playing the audio and adding css animation
function playSound(e) {

    const audio = document.querySelector(`audio[data-key = "${ e.keyCode }"]`);

    const key = document.querySelector(`.key[data-key = "${ e.keyCode }"]`);

    if(!audio) {return;} // stop the function from returning null

    audio.currentTime = 0; //rewind the audio element to the start

    audio.play();

    key.classList.add('playing'); //adding animation

  }
  

// defining removeTransition function and passing the event object to it. to see when the 'transitionend' event happens
function removeTransition(e) {
  //console.log(e);

 
  if(e.propertyName !== 'transform') return;  // do not write anything in the console if it's not a transform

  // only write transform property in the console
  //console.log(e.propertyName);

  // this refers to the variable key because the addEventListener is added to that.
  this.classList.remove('playing');

}


// removing the animation when audio is not playing (key is not down)
const keys = document.querySelectorAll('.key')
// console.log(keys); // you can see that it will give all the divs with the class of key in an array format

// looping though array keys and adding 'transitioneend' event (which is fired when a css transition has completed) and running 'removeTransition' function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// firing the final function
window.addEventListener('keydown', playSound);