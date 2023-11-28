// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//Question 1 : b) Get all the countries with a population of less than 2 lakhs using Filter function

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var result =JSON.parse(req.response);
    var output=result.filter((value)=>value.population<=200000);
    var countrylist=output.map((country)=>country["name"]["common"]);
    console.log("These Countries Population is less than 2 lakhs...")
    for(let i=0;i<countrylist.length;i++){
        console.log(`${i+1}) ${countrylist[i]}`);
    }
}