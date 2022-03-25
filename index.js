
//Button press function below

var drumnumber = document.querySelectorAll(".drum").length;

for(var i = 0; i < drumnumber; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var btninnerhtml = this.innerHTML;
    makesound(btninnerhtml);
    btnanimation(btninnerhtml);
    });
}


//Key press function below

  document.addEventListener("keypress", function(event){
  makesound(event.key);
  btnanimation(event.key);
  });

 function makesound(key){

   switch (key) {
     case "w":
             var crash = new Audio("crash.mp3");
             crash.play();
       break;
       case "a":
               var kick = new Audio("kick-bass.mp3");
               kick.play();
         break;
         case "s":
                 var snare = new Audio("snare.mp3");
                 snare.play();
           break;
           case "d":
                   var tom1 = new Audio("TOM_1.mp3");
                   tom1.play();
             break;
             case "j":
                     var tom2 = new Audio("tom-2.mp3");
                     tom2.play();
               break;
               case "k":
                       var tom3 = new Audio("tom-3.mp3");
                       tom3.play();
                 break;
                 case "l":
                         var tom4 = new Audio("tom-4.mp3");
                         tom4.play();
                   break;
     default: console.log(btninnerhtml);

 }
}


 function btnanimation(currentkey){

  var activebtn = document.querySelector("." + currentkey);
  activebtn.classList.add("pressed");
  setTimeout(function(){
    activebtn.classList.remove("pressed");
  }, 100);
}
