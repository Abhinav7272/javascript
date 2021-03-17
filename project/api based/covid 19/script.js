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
data ='';
function getdata(){
    url = "https://api.covid19api.com/summary";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.Global.NewConfirmed);
        console.log(data['Global']);
        document.getElementById("td").innerHTML= (data.Global.TotalDeaths);
        document.getElementById("tc").innerHTML= (data.Global.TotalConfirmed);
        document.getElementById("tr").innerHTML= (data.Global. NewRecovered);


    })

}

// getData();