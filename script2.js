// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Question No 1 : c) Print the following details name, capital, flag, using forEach function

var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    var result=JSON.parse(req.response);    
    console.log("All the Countries Name, Capital and Flag List..")  
    result.forEach((info,i)=>
    console.log(`Country Name : ${info.name.common}\nCapital : ${info.capital}\nFlag : ${info.flags.svg}\n`,i+1)
    );
}