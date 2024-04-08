// function sayMyName (){
//     console.log("D");
//     console.log("h");
//     console.log("r");
//     console.log("u");
//     console.log("b");

// }
// sayMyName()
// sayMyName

// function AddTwoNumbers (a,b){

//      return (a+b);
   

// } 
// const result=AddTwoNumbers(4,3)
// console.log("result",result)

// after the result you wirte one or more line no line will be included 
// because this is the rule of javascr ipt  




// function loginusername(username="sam"){
//     if(!username){
//         console.log("please enter the username");
//         return


//     }
//     return (username)
// }
// console.log(loginusername("dhrub"))

const user={
    username:"dhrub vij",
    price:3000
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)


const array=[200,400,600,800]

function getsecondvalue(getarray) {
    return getarray[1]
    
}
console.log(getsecondvalue(array));