if (2==="2"){

    console.log("executed");
}
//outside me likhna h kuch 
// 2!=3 /does not equal to always give a answer true or false .
// === strictly check

const balance=1000
// if (balance > 500) console.log("test") // implicit right way code 
// , console.log("Test2")// immature code not readable code 
// nested 

 if(balance<500){
    console.log("less than ")
 } else if (balance <750) {
    console.log("less than 1")
 }else{
    console.log ("less than 1200 ")
 } //ek value h  usko multiple condition se check krna h 
 //using switch statement 

 // switch statement 
  const month=5

  switch (month) {
    case 1:
        console.log("jan")
        
        break;
  
    case 2:
        console.log("feb")
        
        break;
  
    case 3:
        console.log("march")
        
        break;
  
    case 4:
        console.log("april")
        
        break;
  
    default:
        console.log("no month ")
        break;
  }
    //  falsy values 
    //  false ,0,-0,BigInt 0n, "",null,undefined,NaN
    // truthy values 
    // "0",'false'," ", [],{}, function(){}
       const myobj={}

       if(Object.keys(myobj).length===0){
        console.log("object is empty")
       }

    //    nullish coalescing operator (??) null  undefined
         let val1;
         val1=null??undefined

        //  console.log(val1);
        // //  terniary operator
        // // condition ? true : false 
        
        // const icecream =100
        // icecream <=80 ? console.log ("less than 80"):console.log ("more than 80")
         