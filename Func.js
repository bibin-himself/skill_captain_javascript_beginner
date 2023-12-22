function calcTemp(c){
    let Fahrenheit = (c * 9/5) + 32;
    return Fahrenheit;
}

let celcius = 36;
let temperature = calcTemp(celcius);

console.log(`Celcius: ${celcius} >>> Fahrenheit: ${temperature} `);