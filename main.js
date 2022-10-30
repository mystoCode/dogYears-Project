//Dog Years Project//

//Step 1 - declare a variable with the label myAge and assign it a number value.
let myAge = 37;

//Step 2 - initialize a variable with the label earlyYears and assign it to the number 2 as the first 2 years a dog ages quickly in the first two years in respect to human years 
let earlyYears = 2;

//Step 3//
earlyYears = earlyYears * 10.5

//Step 4 - decalare a variable with the label laterYears and assign it the value of the steady dog growth in years in respect with the reaming years of my are minus 2.
let laterYears = myAge - 2;

//Step 5 - reassingning my later years to dog years at the steady 4 ear dog year per human year.
laterYears *= 4

//Step 6//
console.log(earlyYears);
console.log(laterYears);

//Step 7 - declaring a viarable with the label myAgeInDogYears and assinging it the value of summing the converted dog years from ealier and later years.
let myAgeInDogYears = earlyYears + laterYears

//Step 8 - declaring a variable with a label of myName and assigning it to a mixed case string value then reassigning the variable and assigning it the elavaluated results of evoking toLowerCase string method.
let myName = "ScOtT" ;
myName = myName.toLowerCase();

//Step 9 - using temperate literals and string interpolation to insert varibale values into a string and logging the results into the console.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

//Step 10//
// input myAge = 36
// output myAgeInDogYears = 157
// change line 29 to let laterYears = (myAge - 2) * 4;
