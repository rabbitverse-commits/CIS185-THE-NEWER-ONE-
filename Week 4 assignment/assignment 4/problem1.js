// Problem 1: Temperature Converter Suite
// Marian Bambaloff
// October 22, 2015

function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit
    // Formula: (C × 9/5) + 32
    //Copied from slides because Math is hard.
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    // Formula: (F - 32) × 5/9
    //Copied from slides because Math is hard. 
    return (fahrenheit - 32) * 5/9;
}

function getTemperatureDescription(fahrenheit) {
    // Return description based on temperature:
    //let temp = celsiusToFanreheit();
    
    // Below 32: "Freezing"
    if (fahrenheit < 32){
        //console.log//
        return "It's freezing!";
    }  
        // 32-50: "Cold"
            else if (fahrenheit <= 50){
            //console.log//
            return ("It's cold!");
    }
        // 51-70: "Cool"
                else if (fahrenheit <= 70){
                //console.log//
                return  ("It's cool.");
    }
        // 71-85: "Warm"
                    else if (fahrenheit <= 85){
                    //console.log//
                    return  ("It's warm.");
    }
        // Above 85: "Hot"
        else {
         //console.log//
         return ("It's hot!");
    }
}
//AI INPUT BELOW (Besides changing temperature in code above to farenheit)
   //This is for converting Farenheit to Celsius
    let currentTempFarenheit = 65;
    let currentTempDescription = getTemperatureDescription(currentTempFarenheit);
    let convertedTempCelsius = fahrenheitToCelsius(currentTempFarenheit);

    //This is where the code gets outputted into something the user can read about the temperature.
    console.log(`Original Temperature: ${currentTempFarenheit}°F.`);
    console.log(`Converted to Celcius: ${convertedTempCelsius}°C.`)
    console.log(`Description: ${currentTempDescription}`);

    //This is for converting Celsius to Farenheit.
    let currentTempCelsius = 20;
    let convertedTempFahrenheit = celsiusToFahrenheit(currentTempCelsius);
    let convertedTempDescription = getTemperatureDescription(convertedTempFahrenheit);

    console.log(`\nOriginal Temperature: ${currentTempCelsius}°C.`);
    console.log(`Converted to Fahrenheit: ${convertedTempFahrenheit}°F.`);
    console.log(`Description: ${convertedTempDescription}`);

/*
Will need to use else-if statements
*/

//I'm trying to test the code, but nothing is popping up. 
// So here is what I coded. 
//I don't know if it works, but this what I got. 
//I used Google AI to try and polish the coding. I did put the original,
//unpolished coding will be below as a comment. I will do this for the
//other problems as well.

/* 
function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit
    // Formula: (C × 9/5) + 32
    //Copied from slides because Math is hard.
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    // Formula: (F - 32) × 5/9
    //Copied from slides because Math is hard. 
    return (fahrenheit - 32) * 5/9;
}

function getTemperatureDescription(fahrenheit) {
    // Return description based on temperature:
    //let temp = celsiusToFanreheit();
    
    // Below 32: "Freezing"
    if (temperature < 32){
        //console.log//
        return "It's freezing!";
    }  
        // 32-50: "Cold"
            else if (temperature <= 50){
            //console.log//
            return ("It's cold!");
    }
        // 51-70: "Cool"
                else if (temperature <= 70){
                //console.log//
                return  ("It's cool.");
    }
        // 71-85: "Warm"
                    else if (temperature <= 85){
                    //console.log//
                    return  ("It's warm.");
    }
        // Above 85: "Hot"
        else if (temperature > 80){
         //console.log//
         return ("It's hot!");
    }
        return (temperature)
}
 */