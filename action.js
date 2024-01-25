// alert("js is works");
// document.querySelectorAll(".drum")[1].addEventListener("click",function handleMusic(){
//     alert("i got clicked");
// });sounds\tom-1.mp3
// var totalNumberOfButtons = document.querySelectorAll(".drum").length;
// var audio = [];
// for (var i = 0 ;i< totalNumberOfButtons; i++) {
//     audio[i] = "sounds/tom-" + (i + 1) + ".mp3";
// }
// **************************************************************************************************************
// var audio1=new Audio('sounds/tom-1.mp3');
// var audio2=new Audio('sounds/tom-2.mp3');
// var audio3=new Audio('sounds/tom-3.mp3');
// var audio4=new Audio('sounds/tom-4.mp3');
// var audio5=new Audio('sounds/tom-5.mp3');
// var audio6=new Audio('sounds/tom-6.mp3');
// var audio7=new Audio('sounds/tom-7.mp3');
// document.querySelectorAll(".drum")[0].addEventListener("click", function handleMusic_s() {

//     audio1.play();
// });
// document.querySelectorAll(".drum")[1].addEventListener("click", function  handleMusic_s(){
// audio2.play();
// });
// document.querySelectorAll(".drum")[2].addEventListener("click", function handleMusic_s(){
//     audio3.play();
// });
// document.querySelectorAll(".drum")[3].addEventListener("click", function handleMusic_s(){
//     audio4.play();
// });
// document.querySelectorAll(".drum")[4].addEventListener("click", function handleMusic_s(){
//     audio5.play();
// });
// document.querySelectorAll(".drum")[5].addEventListener("click", function handleMusic_s(){
//     audio6.play();
// });
// document.querySelectorAll(".drum")[6].addEventListener("click", function handleMusic_s(){
//     audio7.play();
// });
// *******************************************************************************************************
// Using switch case
var totalNumberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < totalNumberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerHTML = this.innerHTML;
        makesound(buttoninnerHTML);
    });
}
document.addEventListener("keypress", function(e){
    // alert("keyboard key is pressed");
    // console.log(e);
    makesound(e.key); 
})

function makesound(key){
    switch (key) {
        case "a": {
            var audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;
        }
        case "s": {
            var audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;
        }
        case "d": {
            var audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;
        }
        case "f": {
            var audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
        }
        case "l": {
            var audio5 = new Audio('sounds/tom-5.mp3');
            audio5.play();
            break;
        }
        case "k": {
            var audio6 = new Audio('sounds/tom-5.mp3');
            audio6.play();
            break;
        }
        case "j": {
            var audio7 = new Audio('sounds/tom-7.mp3');
            audio7.play();
            break;
        }
        default:
            alert("please enter th valid key");
            break;
    }

}