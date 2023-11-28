// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Question No 1 : a) Get all the countries from Asia continent /region using Filter function

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var result =JSON.parse(req.response);
    var output=result.filter((value)=>value.continents=="Asia" && value.region=="Asia");
    var countrylist=output.map((country)=>country["name"]["common"]);
    console.log("Asian Countries Name List...")
    for(let i=0;i<countrylist.length;i++){
        console.log(`${i+1}) ${countrylist[i]}`);
    }
}
