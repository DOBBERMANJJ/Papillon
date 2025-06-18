//CallBack fucntion in Javascript
/*
A fucntion which is passed into another fucntion is known as a callback fucntion
*/

setTimeout(function(){
    console.log("Timer")//fucntion which is"called back after 5s" making this a callback function
}, 5000)

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
     // this is a callback fucntion because it is called sometime else in the code with its responsibility being given to another function
//here it is up to x to call the fucntion y
})

/*
Output

x
y
(after 5 s)
Timer - this essentially is logged by an anonymous fucntion truly since the fucntion has no name

*/


//Javascript is a synchronous and single-threaded language - meaning it can do only one thing at a time in a specific order
//Callbacks gives us the power to do asynhronous operations for eg a settimemout gives the facility of executing fucntions later rather
//than immediately

//Blocking the main thread

/*
Everything that is executed is executed through callstack aka the main thread, now if a fucntion is very heavy and takes time
to complete it will block other fucntions or processes until it is done if all this is synchronously executed, settimeout gives the
facility of an asynchronous like operation where such a fucntion will be called after a certain specified time
*/

function addEven(){
    let a=0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){console.log("Button Clicked", ++count);})
}
addEven();
 /*
Now when the button is clicked it prints Button Clicked 1 and sequesntially 2 and 3 and so on
This is because the fucntion now forms a closure with a which is the lexical environment of its parent fucntion addEven
and also prevents a to be modified by any outside fucntion
*/

//Power of callbacks

//Deep about Event Listeners

//Closures Demo with Event Listeners

//Scope Demo with Event Listeners

//Garbage Collection and removeEventListeners

console.log("start");
setTimeout(function cb(){
    console.log("callback")
}, 5000);
console.log("End");

console.log("start");

document.getElementById("btn").addEventListener("click", function cb(){
    console.log("callback");
});
console.log("End")


console.log("start");

setTimeout(function cb(){
    console.log("CB SetTimeout")
},5000);

fetch("https://api.netflix.com").then(function cbF(){
    console.log("cb netflix");
})

console.log("end")


console.log("start");
setTimeout(function cb(){
    console.log("callback")
}, 5000);
console.log("End");

let startDate= new Date().getTime();
let endDate = startDate;
while(endDate<startDate+10000){
    endDate = new Date().getTime;
}

console.log("while expires");

