// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//Question 1 : b) Get all the countries with a population of less than 2 lakhs using Filter function

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = () => {
  let res = JSON.parse(req.response);
  console.log("Countries List with less than 2Lakh Population...");
  let population=res.filter((ele)=>ele.population <= 200000)
  let popul_name = population.map((ele,i)=>console.log(`${i+1}) ${ele.name.common} : ${ele.population.toLocaleString()}`))
};
