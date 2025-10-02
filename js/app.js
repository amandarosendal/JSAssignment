console.log("hello world");
console.log("be happy and stay positive");
console.log("be calm and peaceful");
console.log("be present and calm");
console.log("be proud and comitted");
//Detta ska ej printas
/*
console.log("everything is gonna be ok");
 */
const examplestring= "hello this is example";
console.log(examplestring);

let numberofbottles = 10
console.log(numberofbottles);
const line1 = "green bottles hanging on the wall";
console.log(line1);
let numberoflessbottles  = 9
const line2= "and if one green bottle, should accidently fall, there will be";
console.log(line2);
console.log (numberoflessbottles);

let number =4;
number += 2;
console.log(number);

let x = 2+8;
let y = 2+1;
let z = 2+2;
console.log(x);

let gold =50;
++gold;
console.log(gold);

let kmh = 72
let ms = 1440
let speedMs = 1440/72
console.log(speedMs);

let minutes = 3
let seconds = 60
let time = minutes * 60;
console.log(time)


let int = 10;
let textString = "hello world";

//definera funktionen och dess input data (a och b)
function myFirstfunction(a, b) {
  //input datan a och b används för att göra en numerisk operation
  let z = a + b;
  //retunera värdet av z
  return z;
}

// definera en variable där vi ska spara retunerade datan från funktionen
let results;
//sett retunerade datan från funktionen till värdet av results
results = myFirstfunction(7, 6)
//printa retunerade datan
console.log(results);

let num1 = 11;
let num2 = 4;

let result = num1 / num2;
console.log(result); // 2.75

let radius = 2;
let area = Math.PI * radius * radius;

console.log(area); // 12.566370614359172

let weight = 70;       // kg
let height = 1.82;     // meters

let bmi = weight / (height * height);

console.log(bmi);          // 21.132...
console.log(bmi.toFixed(2)); // 21.13 (rounded to 2 decimals)

const string = "green bottles hanging on the wall";
let numberOfbottles = 10;

console.log(numberOfbottles+ " " + string + "."+ numberOfbottles + " " + string);
--numberOfbottles;
const string2 = "And if one green bottle, should accidently fall, there will be " + numberOfbottles + " ";


const birthYear = 1994;                    // byt år här om du vill testaom du vill tes
const year = new Date().getFullYear();     // t.ex. 20250
let age = year - birthYear;              // räkna ålderld

let isChild = age >= 0 && age <= 10;  // 0–10
let isteenager = age >= 13 && age <= 17;
let isadult = age >= 18;

console.log("age:", age < 0 ? null : age);
console.log("isChild:", isChild);
console.log("teenager", isteenager);
console.log("isadult:", isadult);

let birthyear= 1994
let favoritenumber = 51

age = new Date().getFullYear() - birthyear;

ischild = age >=0 && age <= 10;
isTeenager = age >= 13 && age <=17;
isadult = age >= 18 && age <=100;

console.log(
  ischild ? "You are a child" :
    isteenager ? "You are a teenager" :
      isadult ? "You are an adult" :
        "invalid birthyear"
);

const greaterNumber = (age > favoritenumber) ? age : favoritenumber;
console.log("The greater number is " + greaterNumber);
console.log ("age", age);
console.log ("favoritenumber", favoritenumber);
const isOdd = favoritenumber % 2 !== 0;
console.log("your favorite number is an", isOdd ? "odd" : "even"+"number");







function makeLasanga(){
  console.log("Fry meat.");
  console.log("Cut onions.");
  console.log("Fry onions.");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil.");
}

let isHungry = false;
if(isHungry) {


   isHungry = true;
if(isHungry)
                   makeLasanga();
makeLasanga();

  }

//denna var ju lättare som annika visade mig. detta va de vi skulle förstå
function moveforward() {
  console.log("move forward");
}
moveforward()
moveforward()
moveforward()

function moveright(){
  console.log("moveright");
}

moveright()
moveright()
//


 //slide 25
function sayHi() {console.log("Hi!")}sayHi(); // Output: Hi!
function doubleNumber(numberToDouble) {console.log(numberToDouble *= 2);}
doubleNumber(4); // Output: 8doubleNumber(-2); // Output: -4doubleNumber(10); // Output: 100
function add(firstNumber, secondNumber) {console.log(firstNumber + secondNumber);}add(1, 2); // Output: 3
 //

    //sista uppgiften
function doubleNumber(numberToDouble)
{return numberToDouble * 8;}
console.log(doubleNumber(2));

function doubleNumber (numberToDouble)
{return numberToDouble * 2;}
console.log(doubleNumber(2));




function average(a, b) {
  return (a + b) / 2;
}

console.log(average(2, 6));



function welcome(firstName, lastName) {
  return "Welcome " + firstName + " " + lastName + "!";
}

console.log(welcome("Ben", "wiii"));
// sista uppgiften
