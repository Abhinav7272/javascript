let counter =0;
function increase(){
     counter++;
     document.getElementById("display").innerHTML=counter;
}
function decrease(){
    counter--;
    document.getElementById("display").innerHTML=counter;
}
function reset(){
    counter=0;
    document.getElementById("display").innerHTML=counter;
}
function random(){
    let ran =Math.ceil(Math.random()*6);
    // counter=ran;
    document.getElementById("display").innerHTML= ran;
}
