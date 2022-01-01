
let tom1 = new Audio("sounds/tom-1.mp3");
let tom2 = new Audio("sounds/tom-2.mp3");
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");
let crash = new Audio("sounds/crash.mp3");
let kick = new Audio("sounds/kick-bass.mp3");
let snare = new Audio("sounds/snare.mp3");



let buttons = document.querySelectorAll(".drum");
for(let button of buttons){
    button.addEventListener("click", function (){
        switch(this.innerHTML){
            case "w":
                tom1.play();
                break;
            case "a":
                tom2.play();
                break;
            case "s":
                tom3.play();
                break;
            case "d":
                tom4.play();
                break;
            case "j":
                crash.play();
                break;
            case "k":
                kick.play();
                break;
            case "l":
                snare.play();
                break;
            
        }
        console.log(this.innerHTML)
        tom1.play();
    });
}
function handleClick(){
    alert("I got clicked!")
}
