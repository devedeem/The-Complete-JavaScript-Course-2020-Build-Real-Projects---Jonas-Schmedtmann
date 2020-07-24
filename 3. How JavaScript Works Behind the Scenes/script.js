////////////////////////////////////////////////////////////////////////////////////////////
/////   Hoisting
/*

calculateAge(1995);
function calculateAge(year)
{
    console.log(2020- year);
}

//calculateAge(1994);
var calculateAge= function(year)
{
    console.log(2020-year);
}
calculateAge(1994);


console.log(age);
var age = 26;


function foo()
{
    var age = 24;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////////////////////////
/// Scoping

/*
var a = 'Hello';
 first();
function first() {
    var b= ' Mula G';
    second()
    
    function second(){
        var c = ' Gophchy';
        console.log(a+b+c);
    }
}
*/


////////////////////////////////////////////////////////
//// Scope chain is diffrent from Excution stack

/*

var a = 'Hello';
 first();
function first() {
    var b= ' Mula G';
    second();
    
    function second(){
        var c = ' Gophchy';
        third();
    }
}
function third()
{
    var d = 'John'
//    console.log(c);
    console.log(a+d);
}
*/

//////////////////////////////////////////////////////
////// Lecture : this Keyword

//console.log(this);

/*calculateAge(1995);
function calculateAge(year)
{
    console.log(2020 - year);
    console.log(this);
}*/

var john = {
    name : 'John Smith',
    birthYear : 1990,
    calculateAge : function()
    {
        console.log(this.name);
        console.log(2020 - this.birthYear);
        console.log(this);
        
        
       /* function age()
        {
            console.log(this);
        }
        age();*/
    }
}

john.calculateAge();

var mike = {
    name : 'Mike',
    birthYear :1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();
