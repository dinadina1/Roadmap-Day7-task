// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Question No 1 : e) Print the country that uses US dollars as currency.

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var result =JSON.parse(req.response);  
    console.log("These countries are using US dollar...");  
    for(var i=0;i<result.length;i++){
        if(result[i].currencies.USD){
            console.log(`Country Name : ${result[i].name.common}`);
        }
    }
}
