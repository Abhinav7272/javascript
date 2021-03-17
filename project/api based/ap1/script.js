console.log('hello');
let mybtn = document.getElementById("mybtn");

// function getData(){
//     url = "abhi.txt";
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
function getData(){
    url = "https://api.covid19api.com/summary";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
getData();