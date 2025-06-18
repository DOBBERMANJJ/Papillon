const cart=["shoes","pants", "kurta"];

createOrder(cart).then(function(orderId){
    console.log(orderId);  //logs 1234 after 5 s
    return orderId;//very important to return the data we received so other callbacks in the chain have access to it
})
.catch(function(){
    console.log(err.message)//by placing catch here, the catch will only be concerned with the upper element ie it will go on to execute subsequent then callback fucntions and will look something like this
    //Cart is not Valid
    //Payment Success
})

.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){//as usual the data from the previosu chain goes into the parameter here being paymentInfo
    console.log(paymentInfo);//logs Payment Sucess
})

//producer
function validateCart(){
    return true;
}

function createOrder(cart){

    const pr =new Promise(function(resolve, reject){//we use a promise constructor to create a promise, and resolve and reject are fucntions give to us by javascript
        //createOrder
        //validateOrder
        //orderId
        if(!validateCart(cart)){
            const err=new Error("error found");
            reject(err);//reject will rject the promise
        }
        //logic for createOrder
        const orderId="1234";
        if(orderId){
            setTimeout(function(){//to simulate an api call delay
                resolve(orderId);//promise gets resolved with the orderId after successful validation and non rejection
            },5000)
   
        }
        
    });
    return pr
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Success");
    })
}

