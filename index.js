import { textcolor,cycleStyle, randomStyle} from "./stylish.js";

const box=document.querySelector('.Practice');
console.log(box); 
box.addEventListener('click',function(){
    cycleStyle(this);
});


function close1(){
    var x=10;
    function inner(){
        console.log(x);
    }
    return inner;
}

var closure=close1();
closure();
