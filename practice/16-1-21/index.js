alert("working ");

function valid(x,username){
    let len = x.length;
    if(len<8){
        return false;
    }
    if(x.includes("-")){
        return false ;
    }
    if(!x.includes(username)){
        return false ;

    }
     return true ;
    console.log(x,username);

}
