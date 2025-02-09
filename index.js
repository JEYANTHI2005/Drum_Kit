
var random=document.querySelectorAll(".drum").length;
for(var i=0;i<random;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", drum);
function drum(){
   
    var cases= this.innerHTML;
     makeSound(cases);
     buttonAnimation(cases);
  
    }
}
//keyboard
document.addEventListener("keypress",function(event){
     makeSound(event.key);
     buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "j":
            var tom1=new Audio("./sounds/tom-1.mp3");
           tom1.play();
            break;
            case "e":
                var tom2=new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
                case "y":
                    var tom3=new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
                case "p":
                    var tom4=new Audio("./sounds/tom-4.mp3");
                      tom4.play();
                      break;
                case "r":
                    var crash=new Audio("./sounds/crash.mp3");
                 crash.play();
                 break;
                 case "a":
                    var kick=new Audio("./sounds/kick-bass.mp3");
                      kick.play();
                      break;
                case "s":
                    var snare=new Audio("./sounds/snare.mp3");
                   snare.play();
                   break;
              default:
                console.log(cases);
}

}

function buttonAnimation(currentKey){
 var play=  document.querySelector("." + currentKey);
 play.classList.add("pressed");
 setTimeout(function(){
    play.classList.remove("pressed");
 },100);
}
