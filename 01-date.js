let mydate = new Date("01-14-2024")
let time = new Date()

console.log(`date is ${mydate} and time is ${time}`);


console.log(mydate.toLocaleString(`default`,{
    weekday:"narrow"

}));



let mycreateDate = new Date (2024,0,24)
// let mycreateDate = new Date (2024,0,24,5,4)
// let mycreateDate = new Date ("01-14-2024")
console.log(mycreateDate.toLocaleString());
let Time= new Date()
console.log(Time);
 console.log(mycreateDate.getTime());
 console.log(Math.floor(new Date()/1000));


// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// // Divide Time with a year
// const d = new Date();
// let years = Math.round(d.getTime() / year);


