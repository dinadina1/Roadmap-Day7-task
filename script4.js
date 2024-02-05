// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Question No 1 : e) Print the country that uses US dollars as currency.

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload=()=>{
    let res=JSON.parse(req.response);
    console.log("These Countries are using US Dollors..")
    res.forEach((element,i) => {
        if(element.currencies.USD){
            console.log(`${element.name.common}`);
        }
    });
}

