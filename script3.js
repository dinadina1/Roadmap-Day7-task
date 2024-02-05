// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Question 1 : d) Print the total population of countries using reduce function

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload=()=>{
    let res=JSON.parse(req.response);
    let population=res.reduce((acc,ele)=>acc+ele.population,0)
    console.log(`Total Population for all Countries : ${population.toLocaleString()}`);
}

