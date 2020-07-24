//console.log("Hello world>>>>>.");
/*
var firstName = 'Nadeem';
console.log(firstName);

var lastName = 'Arshid';
var age = 24;

var fullAge= true;
console.log(fullAge);
*/

//Lecture 6
/************************
* Variable mutation and type coercion
*/

/*
var firstName = 'Nadeem';
var age = 24;

//Type coercion
console.log(firstName +' '+age);

var job,isMarried;
job = 'Student';
isMarried = false;

console.log(firstName + ' is a '+age+' year old '+ job +'. Is he married? ' + isMarried)

//Varialbe mutation
age = 'twenty four';
job = 'developer';

alert(firstName + ' is a '+age+' year old '+ job +'. Is he married? ' + isMarried)

var lastName = prompt('What is your last name?');
console.log(firstName +' '+ lastName)
*/

/*****************************************/
//Lacture 7
/*
* Operators
*/

/*var now, ageTayyaba, ageNadeem;
 now = 2020;
 ageTayyaba = 25;
 ageNadeem = 24;
//Math Operators
yearTayyaba = now - ageTayyaba;
yearNadeem = now - ageNadeem;

console.log(yearTayyaba);

console.log(now + 2);
console.log(now * 2);
console.log(now /10);

//Logical Operators
var older = ageNadeem < ageTayyaba;
console.log(older);

//Type of Operators
console.log(typeof older);
console.log(typeof yearTayyaba);

console.log(typeof 'Tayyaba is older then nadeem');

var x;
console.log(typeof x)
*/

/**********************
*   Operators Precedence
*/

/*
var now = 2020;
var nadeemyear = 1995;
var fullAge = 16;

//Multiple Oprators
var isFullAge = now - nadeemyear >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - nadeemyear;
var ageMark = 28;
var average = (ageJohn + ageMark) / 2;
console.log(average);


//Multiple Operators
var x,y;
x = (3+5)*4-6;
console.log(x);

//More operators
//x = x*2;
x *= 2;
console.log(x);
// x = x + 10;
x += 10;
console.log(x);
//x = x+1;
// x += 1;
x++
console.log(x)
*/

/*
*Mark and Jhon
*
*/

/*var markHeight = 1.5;
var markMass = 65;
var johnHeight = 1.7;
var johnMass = 80 ;

var markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);
var johnBMI = johnMass / (johnHeight*johnHeight);
console.log(johnBMI)
var compare = markBMI > johnBMI;
console.log(compare);*/




//if else statements

/*var firstName = 'Nadeem';
var age = 24;

if(age < 13)
    {
        console.log(firstName +' is boy.');
    }
else if(age >= 13 && age < 20)
    {
        console.log(firstName + ' is teenager.')
    }
else if(age >= 20 && age <30)
    {
        console.log(firstName +' is young man.')
    }
else{
    console.log(firstName + ' is a man.')
}*/



/*********************
* ternary operators and switch statements;
*/
//var name = 'Nadeem';
//var age = 14;
//age >=18 ? console.log(name + ' takes beer'): console.log(name + ' take juice');
//
//var drink = age >= 18? ' beer' : ' juice';
//console.log(drink);





/*********************************************
* Switch statements
*/


/*
var job = 'driver';
switch(job)
   {
            case 'teacher':
            console.log('i am a teacher');
               break;

           case 'driver':
           console.log('i am a driver');
           break;
           
       case 'cook':
           console.log('i am a cook');
           break;
           
       default:
           console.log('you are burger');

   }
*/


/******************************
* Truthy and Falsy statements and equility operators
*/

//falsy values null, undefined ,0, '', NaN,

// Truthy values : Not falsy Values

/*
var height;
height = 0;
 if(height || height ===0)
     {
         console.log('Variable is defined');
     }
else {
    console.log('Variable is not defined');
}
*/

//equality operators
 // == two equals only check value 
// === three equals check datatype also



/************************************
*  Coding challange
*/

/*var johnTeam = (89+120+103)/3;
var mikeTeam = (116+94+123)/3;
console.log(johnTeam , mikeTeam);

if(johnTeam > mikeTeam)
    {
        console.log('Winner is John\'s team');
    }
else if(johnTeam < mikeTeam)
    {
        console.log('Winner is mike\'s team');
    }
else{
    console.log('Match Draws because both teams scored equally');
}

var maryTeam = (97+134+105)/3;

console.log(johnTeam, mikeTeam , maryTeam);

if(johnTeam > mikeTeam && johnTeam > maryTeam)
    {
        console.log('Winner is John\'s team');
    }
else if(mikeTeam > johnTeam && mikeTeam > maryTeam)
    {
        console.log('Winner is mike\'s team');
    }
else if(maryTeam > johnTeam && maryTeam > mikeTeam)
    {
        console.log('Winner is Mary\'s team')
    }
else{
    console.log('Match Draws because all teams scored equally');
}*/


/************************
*  Functions
*/

/*
function calculateAge(birthYear)
{
    return 2020 - birthYear;
}
 var age = calculateAge(1995)
console.log('Nadeem is ' +age+ ' years old.');

function yearsUntilRetirement(year , name)
{
    var age = calculateAge(year);
    var retirement = 60 -age;
    
    if(retirement > 0)
        {
            console.log(name +' retires in '+ retirement + ' years');
        }
    else{
        console.log(name +' alredy retired ' +retirement*-1 + ' years ago.');
    }
}
 yearsUntilRetirement(1945 , 'Nadeem')
*/



/**************************************
*  Function Statements and Expressions
*/

// Function Declaration

//function whatDoYouDo(){}

//Function Expression

/*var whatDoYouDo = function(job , name)
{
    switch(job)
        {
            case 'teacher':
                return name + ' is a teacher.';
            case 'driver':
                return name + ' is a Driver.';
            case 'designer':
                return name +' is web designer';
            default:
                return name + ' is retired.';
        }
}

console.log(whatDoYouDo('teacher' , 'Nadeem'));
console.log(whatDoYouDo('driver' , 'Rana'));
console.log(whatDoYouDo('army' , 'Asif'));*/


/*************************************************
* Arrays
*/

 // initialize a new array

/*
var names = ['Nadeem', 'Naeem','Asif'];
var years = new Array(1990,1991,1992);

console.log(names);
console.log(names.length);


//Mutate array data

names[0] = 'Tayyaba';
console.log(names);
names[names.length] = 'Rana john';
console.log(names);

// Diferent datatypes 

var john = ['john','smith', 1990,'designer',false]

john.push('black');
john.unshift('Mr.')
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isTeacher = john.indexOf('teacher') === -1 ? 'John is not a teacher' : 'John is a teacher';
console.log(isTeacher);
*/


/*************************************************
*   Coding Challange
*/



/*
var tipCalculator = function(amount)
{
    if (amount < 50)
        {
            return amount*0.2;
        }
    else if(amount >= 50 && amount < 200)
        {
            return amount*0.15;
        }
    else{
        return amount*0.1;
    }
}

var billOne = tipCalculator( );
console.log(billOne);

var billTwo= tipCalculator(48);
console.log(billTwo);

var billThree = tipCalculator(268);
console.log(billThree);

var tip = [billOne,billTwo, billThree];
console.log(tip);

var paidOne = 124;
var paidTwo = 48;
var paidThree = 268;

var totalBill = [paidOne+billOne ,paidTwo+billTwo,paidThree+billThree];
console.log(totalBill);
*/



/******************************************
* Objects and Properties
*/

//object litrals
/*
var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family :['Martin', 'Luther', 'King'],
    job : 'teacher',
    isMarried : false
}

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x])


john.job = 'designer';
john.isMarried = true;
console.log(john);


// new object sentence

var jane = new Object();
jane.firstName = 'JaneP';
jane.lastName = 'Janu';
jane.job = 'Digger';
jane['lastName'] = 'sugra';
console.log(jane);
*/


/******************************************
* Objects and Methods
*/
/*

var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family :['Martin', 'Luther', 'King'],
    job : 'teacher',
    isMarried : false,
    calAge : function(){
        this.age = 2020- this.birthYear;
    }
}
john.calAge();
console.log(john.age);

*/



/******************************************
*  Challange
*/

/*var mark = {
    name : 'Mark',
    weight : 67,
    height : 1.59,
    Bmi : function(){
        this.bmi = this.weight/ (this.height * this.height);
    }
}
mark.Bmi();
console.log(mark.bmi);


var john = {
    name : 'John',
    weight : 67,
    height : 1.59,
    Bmi : function(){
        this.bmi = this.weight/ (this.height * this.height);
    }
}
john.Bmi();
console.log(john.bmi);

if(john.bmi > mark.bmi)
    {
        console.log(john.name + ' has higher BMI');
    }
else if(mark.bmi > john.bmi)
    {
        console.log(mark.name + ' has higher BMI');
    }
else{
    console.log(john.name +' and '+ mark.name + ' has equal BMI\'s');
}*/


/******************************************
*  Loops and iteration
*/

//For loop
/*
for(var i =1 ; i<=20; i++)
    {
        console.log(i);
    }
*/


/*
var john = ['john', 'smith', 1990, 'teacher',false];
for( var i = 0; i<john.length; i++)
    {
        console.log(john[i]);
    }

//While Loop
var i = 0;
while(i<john.length)
    {
        console.log(john[i]);
        i++;
    }
*/

// Continue and break statement

/*
var john = ['john', 'smith', 1990, 'teacher',false];
for( var i = 0; i<john.length; i++)
    {
        if(typeof john[i] !== 'string') continue;
        console.log(john[i]);
    }


for( var i = 0; i<john.length; i++)
    {
        if(typeof john[i] !== 'string') break;
        console.log(john[i]);
    }

// Challenge
for( var i = john.length -1; i>=0; i--)
    {
        console.log(john[i]);
    }

*/




/******************************************
*  Challenge #5
*/

var john = {
    
    fullName : 'John Smith',
    bills : [124, 48, 268, 180, 42],
    calcTips : function(){
         this.tips = [];
        this.totalBill = [];
        for(var i=0; i<this.bills.length; i++)
            {
                //Determine percentage on tipping rules
                var percentage ;
                var bill = this.bills[i];
                
                if(bill<50)
                    {
                        percentage =0.2;
                    }
                else if(bill >= 5 && bill < 200)
                    {
                        percentage = 0.15;
                    }
                else{
                    percentage =0.1;
                }
                this.tips[i] = bill * percentage;
                this.totalBill[i] = bill + bill*percentage;
            }
    }
    
}



var mark = {
    
    fullName : 'Mark Miller',
    bills : [77, 475, 110,45],
    calcTips : function(){
         this.tips = [];
        this.totalBill = [];
        for(var i=0; i<this.bills.length; i++)
            {
                //Determine percentage on tipping rules
                var percentage ;
                var bill = this.bills[i];
                
                if(bill<100)
                    {
                        percentage =0.2;
                    }
                else if(bill >= 100 && bill < 300)
                    {
                        percentage = 0.1;
                    }
                else{
                    percentage =0.25;
                }
                this.tips[i] = bill * percentage;
                this.totalBill[i] = bill + bill*percentage;
            }
    }
    
}

function calcAverage(tips)
{
    var sum = 0;
    for( var i=0; i<tips.length; i++)
        {
            sum = sum + tips[i];
        }
    return sum/tips.length;
}


john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john,mark);


if(john.average > mark.average)
    {
        console.log(john.fullName +'\'s  family has paid more tips, with an average of $'+john.average);
    }
else if(mark.average >john.average)
    {
        console.log(mark.fullName+'\'s family has paid more tips, with an average of $'+mark.average);
    }









