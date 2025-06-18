a();//Hello
b();//b is not a function since b is at this point undefined and we are trying to call it

//Function Statement aka Function Declaration

function a(){
    console.log("Hello")
}

//Fucntion Expression
//Fucntion can be assiged to a variable also

var b= function(){
    console.log("Hello")
}

/*
The Difference between a fucntion expression and a statement is hoisting
when a() is called the whole function of a is already hoisted into memory
while b is assigned undefined like a normal variable
*/

//Anonymous Fucntion - functions without names - They dont have their own identity - looks like a fucntion statement - they are usually assigne to variable

//Named Fucntion Expression - if a fucntion expression has a name in itself
var b= function xyz(){
    console.log("Hello")
}
xyz(); // throws reference error not defined since xyz is not created in the outer scope and is created as a local variable, it is accessible inside the fucntion however if we try to use it outside its scope it throws error like any other variable or fucntion which is attempted to be used outside

//Difference between Paramenter and arguments

var b= function(p1, p2)//parameters (label and identifier which get the values from arguments are parameters) are local variables of the fucntion or identifiers or lables cannot be used outside the function
{
    console.log("Hello")
}
b(1,2);//Arguments - values we pass inside function

//First Class Fucntions

var b= function(param1){
    console.log(param1);
}
b(function(){})//anonymous fucntion passed inside a fucntion


var b= function(param1){
    console.log(param1);
}
function hi(){}
b(hi)//normal fucntion passed inside a fucntion

var b= function(){
    return function(){

    }
}
b(); //contains the returned fucntion

//The ability to use fucntions a values and can be passed as arguments to another function or be returend from
// a function is known as first class fucntions in js
// First class citizens is the same as first class fucntion, this ability makes fucntions the first class citizen of js

//Arrow Functions - introduced in es6

