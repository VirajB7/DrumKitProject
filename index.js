var t = document.getElementsByClassName("set")[0];
var n = t.getElementsByTagName("*").length;

var n1 = document.querySelectorAll(".drum").length;

//Button click by mouse
for (var i = 0; i < n1; i++) {
    document.getElementsByTagName("button")[i].addEventListener("click", function () {
       var buttoninnerHTML= this.innerHTML;
        makeSound(buttoninnerHTML);
      buttonAnimation(buttoninnerHTML);
    });
}

//Button click by Keyboard
document.addEventListener("keydown",function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3=new Audio("tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4=new Audio("tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare=new Audio("snare.mp3");
            snare.play();
        break;

        case "k":
            var crash=new Audio("crash.mp3");
            crash.play();
        break;

        case "l":
            var kickBass=new Audio("/sounds/kick-bass.mp3");
            kickBass.play();
        break;

        default: console.log(buttoninnerHTML);
       }
}


function buttonAnimation(currentKey){
  var acitveButton=  document.querySelector("."+currentKey);
  acitveButton.classList.add("pressed");

  setTimeout(function(){
    acitveButton.classList.remove("pressed");
  },100);
}