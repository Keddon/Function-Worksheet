/* Created by Keddon Campbell on 2/26/15
Function Worksheet
 */

/*
Calculate the circumference of a circle.
 */


var circleAnswer = circleCalc(2); //stores the result of the function 'cirleCalc' and its argument

function circleCalc(radius){      // holds the parameter for the function
    var circleresult = radius * (2 * 3.14159); //uses the argument passed in to calculate the radius
    return circleresult;    // returns the value of the calculation to the variable 'circleAnswer'

}

console.log("The circumference is " + circleAnswer); //prints the results to console


/*
Calculate the total number of bee stings to kill an animal
 */

var victimWeight = 100; 
var totalSting = lethalAmount(victimWeight);

function lethalAmount(weight){
    var stingCount = weight * 8.666666667;
    return stingCount;
}


console.log("It takes "+ totalSting + " bee stings to kill this animal");



