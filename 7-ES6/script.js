// Lecture let and const


// ES5
/*

var name5 = 'jane smith';
var age5 = 23;
name5 = 'jane Miller';
console.log(name5);


//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

//ES5 
/*function driverLicence5(passedTest){
    if(passedTest){
        var firstName5 = 'John';
        var birthYear5 = 1990;
       
    }
     console.log(firstName5 + ' born in '+ birthYear5 + ' is now officially allowed to drive a car.');
}

driverLicence5(true);*/

//ES6
/*function driverLicence6(passedTest){
    let firstName6;
      const birthYear6 = 1990;
    if(passedTest){
       firstName6 = 'John';
      
        
    }
    console.log(firstName6 + ' born in '+ birthYear6 + ' is now officially allowed to drive a car.');
}

driverLicence6(true);*/

//ES5
// var i = 23;
//for(var i = 0; i < 5; i++){
//    console.log(i);
//}
//console.log(i);

//ES6
/*
let i = 23;

for(let i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);
*/




///////////////////////////
// Blocks and IIFEs

//ES6
//Block
/*
{
    const a = 1;
    let b = 2;
    
    
}*/
//can't access anything which is iniside the block from outside directly


//ES5
//IIFE

/*(function(){
    var c = 3;
})();*/

//can't access anything which is iniside the IIFE from outside directly



//////////////////////////////////////////////
// Strings

/*let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calculateAge(year){
    return 2020 - year;
}


// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calculateAge(yearOfBirth) + ' years old.');


// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));*/



///////////////////////////////////////////////
///// Arrow functions

/*const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el){
    return 2020 - el;
});

console.log(ages5);


//ES6

//Method 1
let ages6 = years.map(el => 2020-el);

console.log(ages6);

//Method 2

ages6 = years.map((el, index) => `Age element ${index+1}: ${2020 - el}.`);

console.log(ages6);

//Method 3
ages6 = years.map((el , index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`
});

console.log(ages6);*/



////////////////////////////////////////////
//// Lecture Arrow Functions this Keyword 

//ES5
/*
var box5 = {
    color : 'green',
    position : 1,
    clickMe : function(){
       var thise = this; document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + thise.position + ' and it is ' + thise.color;
            alert(str)
        });
    }
}

box5.clickMe();
*/

/*

//ES6
const box6 = {
    color : 'green',
    position : 1,
    clickMe : function(){
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str)
        });
    }
}

box6.clickMe();


/*

const box6 = {
    color : 'green',
    position : 1,
    clickMe : () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str)
        });
    }
}

box6.clickMe();




function Person(name){
    this.name = name;
}

//ES5 
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);



//ES6
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(el => 
        `${this.name} is friends with ${el}`
    );
    console.log(arr);
}

new Person('Mike').myFriends5(friends);
*/



//////////////////////////////////////////
////  Lecture : Destructuring

/*
// ES5

var john = ['John', 26];
var naamee = john[0];
var aaggee = john[1];

//ES6
const [name,age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firstName : 'John',
    lastName : 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);


const {firstName : a, lastName : b} = obj;
console.log(a);
console.log(b);





function calcAgeRetirement(year){
    const age = new Date().getFullYear()-year;
    return [age, 65-age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/



///////////////////////////////////////////////////
// Lecture : Arrays

/*
const boxes = document.querySelectorAll('.box');


//ES5 
var boxArr5 = Array.prototype.slice.call(boxes);
boxArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});


//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/


//ES5
/*for(var i = 0; i < boxArr5.length; i++){
    
    if(boxArr5[i] === 'box blue'){
        continue;
    }
    boxArr5[i].textContent = 'I changed to blue!';
};*/


//ES6
/*
for(const cur of boxesArr6){
    if(cur.className.includes('blue'))(cur.className === 'box blue'){
        continue;
    }
    cur.textContent = 'I changed to blue';
}

*/



//ES5
/*var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >=18));*/



////////////////////////////////////////////////////
/// Lecture : Spread Operator
 
/*function addFourAges (a, b, c, d){
    return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lilly', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');*/




///////////////////////////////////////////////////////
////// Lecture: Rest parameters

/*//ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur){
        console.log((2020 - cur) >= 18);
    });
};

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

//Random mobile challenge
/*
const testfunctiion = test =>test === test;
console.log(testfunctiion(undefined));
*/

//ES6
/*function isFullAge6(...years){
    years.forEach(cur => console.log((2020 - cur) >= 18));
}
isFullAge6(1990, 1999, 1965, 2016, 1987);*/



/*
//ES5
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments,1);
    
    argsArr.forEach(function(cur){
        console.log((2020 - cur) >= limit);
    });
};

//isFullAge5(16,1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);
//ES6
function isFullAge6(limit, ...years){
    years.forEach(cur => console.log((2020 - cur) >= limit));
}
isFullAge6(16,1990, 1999, 1965, 2016, 1987);
*/




///////////////////////////////////////////////////
////  Lecture : Default parameters

//ES5
/*function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'Pakistani' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');*/


// ES6

/*
 function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Palistani'){
     this.firstName = firstName;
     this.lastName = lastName;
     this.yearOfBirth = yearOfBirth;
     this.nationality = nationality;
 };

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

*/



 ////////////////////////////////////////////////
////   Lecture: Maps

/*
const question = new Map();
question.set('question', 'What is the officail name of the latest major Javascript varsion?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));

//console.log(question.size);

if(question.has(4)){
//    question.delete(4);
//    console.log('Answer 4 is here');
}

//question.clear();

//question.forEach((key, value) => console.log(`This is ${key}, and it's set to ${value}`));


for(let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`)
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/


/////////////////////////////////////////////////
// Lecture : Classes

//ES5
/*var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'Teacher');


//ES6
class Person6{
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge(){
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

const john6 = new Person6('John', 1990, 'Teacher');*/


///////////////////////////////////////////////////
//////// Lecture : Classes and Subclasses


/*
//ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athelete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}


Athelete5.prototype = Object.create(Person5.prototype);
var johnAthelete5 = new Athelete5('John', 1990, 'Swimmer', 3, 10);

Athelete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

johnAthelete5.calculateAge();
johnAthelete5.wonMedal();


//ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athelete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthelete6 = new Athelete5('John', 1990, 'Swimmer', 3, 10);

johnAthelete6.calculateAge();
johnAthelete6.wonMedal();
*/



//////////////////////////////////////////////////////
//        Coding : Challenge


/*
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear; 
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class Street extends Element {
    constructor(name, buildyear, length, size = 3) {
        super(name, buildyear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);

    
    }

}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), 
                 new Street('Evergreen Street', 2008, 2.7, 2),
                 new Street('4th Street', 2015, 0.8),
                 new Street('Sunset Boulevard', 1982, 2.5, 5)];



function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('-----PARKS REPORT-----');
    
    //Density
    p.forEach(el => el.treeDensity());
    
    //Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [toatalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    //Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    
}

function repotStreets(s){
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} Streets have a total length of ${totalLength} km.`);
    
    //Classify sizes
    s.forEach(el => el.classifyStreet());
}
reportParks(allParks);
repotStreets(allStreets);

*/






































