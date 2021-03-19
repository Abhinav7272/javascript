let word = "apple";
data ='';
yourkey="a3904c0e-aee3-4938-bbd9-431e97592a5e";
function getdata(){
    url = `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${yourkey}`;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        // console.log(data['Global']);
        document.getElementById("out").innerHTML= (data[0]['shortdef']);
        // document.getElementById("tc").innerHTML= (data.Global.TotalConfirmed);
        // document.getElementById("tr").innerHTML= (data.Global. NewRecovered);


    })

}
getdata();