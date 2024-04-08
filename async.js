// async function getdata() {
//  return newPromise((resolve,reject)=>{
      
//         setTimeout(()=>{
//            resolve(455)
//         },1);

        

//     })


    
// }

 async function getdata (){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    let data = await x.json ()
   return data()
}

   
  async function main () {
    

    console.log("hey");

    console.log("hllo");

    let data= await getdata() 
    console.log(data);
   
    

    console.log("hello");

    

    
 }
 main()