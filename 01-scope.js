// var c =400               
// if (true) {
//     let a=100;
//     const b=200;
//     var c=300;
//     console.log("inner",c);
    
// }
//  console.log(c)


// scope level and mini hosting 

function one (){
    const username="dhrub vij"
    
    function two (){
       const website ="youtube"
       console.log(username);

    }
    two()
    

 
}
one () 

if(true){
    const username="dhrub vij"

if(true){
    const website="youtube"
    console.log(username);
}
}

const addtwo = function (num){
    return num+2
    
}
console.log(addtwo(5));