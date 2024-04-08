let prom1= (resolve,reject)=>{
    setTimeout(()=>{
        console.log("hey");
        resolve("dhrub vij")

    },3000)
}
     prom1.then((a)=>{
        console.log(a);

     })





