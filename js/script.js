/* Created by Keddon Campbell on 2/26/15
Function Worksheet
 */

/*
Calculate the circumference of a circle.
 */

var circleAnswer = circleCalc(radius);

function circleCalc(radius){
    var result = radius * (2 * 3.14159);
    return result;
}

circleCalc(6);
console.log(circleAnswer);