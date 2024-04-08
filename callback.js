console.log("my name is dhrub");

setTimeout (()=>{
       console.log("hey my name is dhrub vij ")

},0);
 console.log("hey my fullname is dhrub vij ");

   const callback=(arg)=>{
     console.log(arg);
   }
 const loadscript=(src,callback) =>{
    let sc =document.createElement("script")
     sc.src= src;
     sc .onload=callback(dhrub)
     document.head.append(sc)

 }
