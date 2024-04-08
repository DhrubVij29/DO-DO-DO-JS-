const myarray = [0,1,2,3,4,5,]
// console.log(myarray[1]);
// console.log(myarray.length);
// console.log(myarray.push(6));
// console.log(myarray.pop());
// console.log(myarray.unshift(9));

// myarray.unshift(9)
// console.log(myarray);

// console.log(myarray.includes(3));
// // console.log(myarray);
// console.log(myarray.indexOf(3));

// console.log( typeof myarray.join());


console.log("A" ,myarray);
// const myn1 = myarray.slice(-5,1)
const myn1 = myarray.splice(1,3)

console.log("B",myarray);
console.log(myn1);  

const marvel_heroes= ["spiderman","thor","ironman"]
const dc_heroes= ["batman", "flash","superman"]

// const all_heroes=[...marvel_heroes,...dc_heroes]
// const all_heroes=marvel_heroes.concat(dc_heroes)
console.log(all_heroes);


const array=[1,2,3,[,4,6,7],8,9,0,[8,4,9]]
console.log(array.flat(1));

console.log(Array.isArray("dhrub"));
console.log(Array.from("dhrub"));

console.log(Array.from({name:"dhrub"}));
 





  