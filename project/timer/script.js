let sec =0;
let min =0;
let hour =0;

let displaysec=0;
let displaymin=0;
let displayhour=0;

let interval = null;
//logic 
let status ="stopped"

function  stopwatch(){
    sec++;
    if(sec/60==1){
        sec=0;
        min++;
        if(min/60==1){
            min=0;
            hour++;
        }
    }
    if(sec<10){
      displaysec="0"+sec.toString();
    }
    else{
        displaysec = sec;
    }
    if(min<10){
        displaymin="0"+min.toString();
    }
    else{
        displaymin = min;
    }
    if(hour<10){
        displayhour= "0"+hour.toString();
    }else{
        displayhour =hour;
    }

    document.getElementById("display").innerHTML=displayhour+":"+displaymin+":"+displaysec;
}



function  startstop(){
    if( status=="stopped"){
        interval = window.setInterval(stopwatch,1000);
        document.getElementById("startstop").innerHTML ="stop";
        status="started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML="start";
         status="stopped";    
      }
}
function reset (){
    window.clearInterval(interval);
    sec=0;
    min=0;
    hours=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById('startstop').innerHTML ="start";
}