
var size=document.querySelectorAll(".drum").length;
for(var i=0;i<size;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var button=this.innerHTML;
    makesound(button);
   animation(button);
});
 
}


//cant use queryselector-all because it return an array,if we want to use it we need to use for loop for every element.
//ofthatarray.

document.addEventListener("keypress",function(event){
    makesound(event.key);
   animation(event.key);
});
//we used event here anonymously becuase if code gets executed it will read the function and expect a 
//key to be pressed which we will not press thus it will get depreciated.



function makesound(key)
{
//varaudio=newAudio("");
//audio.play();
//this.setatt
//document.querySelectorAll(".drum")[i].setAttribute("background:url","C:/Users/Chaitanya/Desktop/webdev/webdevelpoment/Drum_Kit/images/kick.png");
//this.style.color="white";

//var button=this.innerHTML;
switch(key){
case"w":
var audio=new Audio("C:/Users/Chaitanya/Desktop/web dev/webdevelpoment/Drum_Kit/sounds/tom-1.mp3");
audio.play();
break;
case"a":
var audio=new Audio("C:/Users/Chaitanya/Desktop/web dev/webdevelpoment/Drum_Kit/sounds/tom-2.mp3");
audio.play();
break;
case"s":
var audio=new Audio("C:/Users/Chaitanya/Desktop/web dev/webdevelpoment/Drum_Kit/sounds/tom-3.mp3");
audio.play();
break;
case"d":
var audio=new Audio("C:/Users/Chaitanya/Desktop/web dev/webdevelpoment/Drum_Kit/sounds/tom-4.mp3");
audio.play();
break;
case"j":
var audio=new Audio("C:/Users/Chaitanya/Desktop/web dev/webdevelpoment/Drum_Kit/sounds/snare.mp3");
audio.play();
break;
case"k":
var audio=new Audio("C:/Users/Chaitanya/Desktop/web dev/webdevelpoment/Drum_Kit/sounds/crash.mp3");
audio.play();
break;
case"l":
var audio=new Audio("C:/Users/Chaitanya/Desktop/web dev/webdevelpoment/Drum_Kit/sounds/kick-bass.mp3");
audio.play();
break;

default:
break;
}
}

function animation(currkey)
{
    var pressedbutton=document.querySelector("." + currkey);
    pressedbutton.classList.add("pressed");

    setTimeout(function(){
        pressedbutton.classList.remove("pressed");
    },100);
}