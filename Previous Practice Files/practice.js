function outer(){
    var a=10;
    function innar(){ //Fucntion forms a closure with its parents lexical environment and has access to the var a
        console.log(a);
    }

    return innar;
}

outer()();// This double call calls the outer which then returns innar which is then called again
//Due to closure when we call the fucntion innar outside its original scope it still remembers it lexical environment therby having
//access to the variable since it forms a closure with its parents lexical environment

//other way to write it
var b= outer();
b();



function outer(){
    
    function innar(){ //Fucntion forms a closure with its parents lexical environment and has access to the var a
        console.log(a);
    }
    var a=10;

    return innar;
}

//This will still do the same thing because a closure is not concerned with a particular sequence by which a declaration is made
//rather with the environment which still includes the var a

function outer(){
    let a=10;
    function innar(){ //Fucntion forms a closure with its parents lexical environment and has access to the var a
        console.log(a);
    }
   

    return innar;
}

// Let being block scoped does not affect closure since the lexical environment of the parent still includes a and is still accessible


function outer(b){
    let a=10;
    function innar(){ //Fucntion forms a closure with its parents lexical environment and has access to the var a
        console.log(a);
    }
   

    return innar;
}
var c= outer("Hello world");
c();

//Here the 10 Hello world is printed, why?
// When the innar is called it forms a closure with its outer lexical environment which will now also include the argument which is passed
//which in this case is Hello world

//What if outer function was nested inside another function

function outmost(){
    var c=20;
function outer(b){
    let a=10;
    function innar(){ //Fucntion forms a closure with its parents lexical environment and has access to the var a
        console.log(a, b, c );
    }
    return innar;
}return outer;
}
var g=outmost();
var f= g("Hello world");
f();

//Innar fucntion will form a closure with the outmost fucntion's lexical environment ie the reference of c also also and has access to
//to the var c 

//conflicting global variable with same name

function outmost(){
    var c=20;
function outer(b){
    let a=10;
    function innar(){ //Fucntion forms a closure with its parents lexical environment and has access to the var a
        console.log(a, b, c );
    }
    return innar;
}return outer;
}
let a=100;//conflicting name
var g=outmost();
var f= g("Hello world");
f();

//Since the innar fucntion forms a closure with its own copy of a it has reference to the variable a that is inside of the outer function
//since innar fucntion formed a closure with the lexical environment of outer fucntion and so it does not matter if there
//is a conflicting global variable

//But if the let variable inside of outer was not present, it would try to find a in its outer fucntion ultimately ending up with
//reference to the variable a which was declared globally, just to resolve that this variable b exists and to print it

//if a was not there at all it would lead to a reference at all since a does not exist for it to be referred to



function counter(){
    var count =0;
    return function incount(){
        count++;
        console.log(count);
    }
}

var count1=counter();
count1();

//This code demonstrates data hiding by essentially hiding the count variable as it can only be accessed by accessing the fucntion counter
//and cannot be access by just simply tring to access it in the global scope

function counter(){
    var count =0;
    return function incount(){
        count++;
        console.log(count);
    }
}

var count1=counter();
count1();//1
count1();//2

//So execution context of count1 is supposed to be destroyed after it calling so why is it that count1 after being called again outputs 2
//Few points from chatgpt
//Each time count1 is called it increments the same count variable preserved by the closure
//Tha variable survives because the returned fucntion still has a reference to it
//so why is the execution context not destroyed completely
//Normally execution contexts are destroyed when functions return but closures prevent garbage collection of the variables they reference
//since incount still closes over count, js keeps the environment alive as long as the returned fucntion is accessible
//count1 hols reference to the returned fucntion and as long as count1 exists the closure is kept alive and so is the count variable
//we can destoy it by assiging the count1 null destroying all reference to the returned fucntion and since nothing is referencing the returnedd fucntion
//the closure becomes eligible for garbage collection, count variable is also released and memory used by closure is reclaimed by js engine
//Closure will stay alive as long as atleast one reference to it exists
//one all references are removed or go out of scope the closure along with its preserved variables are destroyed


var count2=counter();//This will be a fresh call to the fucntion and will not be associated with the previously called count1
// whenever a new fucntion is called it creates a new independent copy and the incount will have a new count
count2();//This will return 1

//Using constructor fucntion for scalability

function Counter(){
    var count=0;
    this.incount=function(){
        count++;
        console.log(count);
    }
    this.decount=function(){
        count--;
        console.log(count);
    }
}

var count1=new Counter();

count1.incount();
count2.incount();

//Making count scalable and easy to read and update using constructor fucntion

function outer(){
    var a=10;
    function innar(){ //Fucntion forms a closure with its parents lexical environment and has access to the var a
        console.log(a);
    }

    return innar;
}

var here=outer();
here();

//Now as long as here exists it references to the returned fucntion innar which forms a closure which includes a=10
//This is not garbage collected as it can be accessed later by here and as long as here exists the var a cannot be garbage collected



function outer(){
    var a=10, z=10;
    function innar(){ //Fucntion forms a closure with its parents lexical environment and has access to the var a
        console.log(a);
    }

    return innar;
}

var here=outer();
here();

//Here the closure also includes z however since the reurn fucntion does not have any use for z it is smartly garbage collected