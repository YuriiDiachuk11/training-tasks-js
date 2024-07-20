function checkNumber (number) {
    if(number === 10) {
        return true;
    } else {
        return false;
    }
}
console.log (checkNumber (10));


function checkSeason (num) {
    switch (num) {
        case 1:
            return "winter"; 
        case 2: 
            return "spring"; 
        case 3:
            return "summer"; 
        case 4: 
            return "autumn";
        default: "Result is false";                 
    }
}
console.log(checkSeason(3));




