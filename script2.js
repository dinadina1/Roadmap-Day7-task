// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Question No 1 : c) Print the following details name, capital, flag, using forEach function

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = () => {
  let res = JSON.parse(req.response);
  console.log("All the Countries Name, Capital and Flag List..")
  res.forEach((element,i) => {
        console.log(`${i+1}) Name: ${element.name.common} \n   Capital: ${element.capital} \n   Flag: ${element.flags.png}`);
  });
};

