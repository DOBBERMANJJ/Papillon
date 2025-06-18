const name1={
    fistname:"first",
    lastname:"last",
    printName:function(){
        console.log(this.firstname+""+this.lastname);
    }
}

name1.printName(); //logs first last

let name2={
    fistname:"sachin",
    lastname:"Ten",
}

//function borrowing
name1.printName.call(name2); //logs sachin Ten

//Normally we dont decalrea function if we wanted to use continuously inside an object instead we declare the funciton outside

let printOutName= function(){
    console.log(this.firstname+""+this.lastname);
}

printOutName.call(name2); //logs Sachin Ten since this will point to the object name2

/////////////Another case

let prinName= function(hometown){
    console.log(this.firstname+""+this.lastname+hometown);
}

prinName.call(student2, "Mumbai"); //the first parameter should point to the this and the next parameter can be the parameter accepted as the argument

//more arguments require more commas and more paramneters can be passed for eg

let prinName2= function(hometown,state){
    console.log(this.firstname+""+this.lastname+hometown+state);
}
prinName.apply(student2, ["Mumbai", "Maharastra"]);//so and so

const printNameBi= prinName2.bind(name2, "Mumbai", "Maharashtra");
//It binds the fucntion with the prinName2 with the object passed to it and returns us a method to be used later so this printNameBi becomes a function whose this will always point to the object name2 and can be invoked later
console.log(printNameBi);
printNameBi();