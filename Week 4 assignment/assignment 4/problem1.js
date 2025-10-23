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

    //let sum = num1 + num2 + num3;
    //return sum / 3;
    
    //Nevermind
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

}

/*
Will need to use else-if statements
*/