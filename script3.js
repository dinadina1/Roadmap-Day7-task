// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Question 1 : d) Print the total population of countries using reduce function

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var result=JSON.parse(req.response);
    var fill=result.map((val)=>val.population)
    var total=fill.reduce((acc,sum)=>acc+sum);
    console.log("Total Population of all Countries");
    console.log(total);
}