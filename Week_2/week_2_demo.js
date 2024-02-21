//Function to calculate triangle area
function triangleArea(base, height) {
    return base * height * 0.5;
}

//Call method to calculate triangle area
var area1 = triangleArea(10, 5);
var area2 = triangleArea(3.4, 2);
var area3 = triangleArea(3, 4);

//Print the areas on the console
console.log(area1);
console.log(area2);
console.log(area3);



//Function to convert feet to inches
function convertFeetToInches(length) {
    //1 foot = 12 inches
    return length * 12;
}

//Call the function with different length and output the results
console.log("Length of 1 foot in inches: " + convertFeetToInches(1));
console.log("Length of 3.2 feet in inches", convertFeetToInches(3.2));