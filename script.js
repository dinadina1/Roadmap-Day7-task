// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Question No 1 : a) Get all the countries from Asia continent /region using Filter function

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = () => {
  let res = JSON.parse(req.response);
  console.log("Asia Continents/Region Countries List:");
  let country = res.filter((data) => data.region === "Asia" || data.continents[0] === "Asia");
  country.map((data) => console.log(`Country Name : ${data.name.common}`));
};
