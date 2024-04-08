const user ={
    username :"dhrub vij",
    price :999,
    welcomeMessage:function (){
        console.log(`${this.username} , welcome to website`);
         console.log(this)
    }
     
}
user.welcomeMessage ()


function chai (){
    let username="dhrub"
    console.log(this.username);
}
chai()

const add =(num1,num2)=> ({username:"vij"})
    console.log(add(3,4));
    

    
