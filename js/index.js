var z=0,interval=null;
var statu="stopped";
function increment(){
   z++;
   document.getElementById("display").innerHTML=z;
} 
function start()
{

if( statu ==="stopped")
{
    interval=window.setInterval(increment,100);
    statu="started";
    document.getElementById("startbtn").innerHTML="Stop";
    
}
else{
    window.clearInterval(interval);
    statu="stopped";
    document.getElementById("startbtn").innerHTML="Start";
}
}
function preset(){
    document.getElementById("display").innerHTML="0";
    window.clearInterval(interval);
    document.getElementById("startbtn").innerHTML="Start";
    statu="stopped";
    z=0;
}



