 
function libi()
{
var audio = document.getElementById('music1'); 
if(audio!==null){             
     alert(audio.paused);
if(audio.paused){                 
    audio.play();//audio.play(); 
}else{
    audio.pause();
    }
  } 
}
















