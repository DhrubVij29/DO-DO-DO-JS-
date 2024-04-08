let Myfunction = function (params) {
    console.log("hello world!");
    
}
console.log(typeof Myfunction);


let username = null
console.log(typeof username);


//  stack and heap memory

let MyYoutubeName = 123324424
let anotherName= MyYoutubeName
console.log( typeof anotherName);


let userone = {
    email: "dhrub@gmail.com"
}

 let usertwo = userone

  usertwo.email="pradeep@gmail.com"

    
console.log(userone.email);
console.log(usertwo.email);
