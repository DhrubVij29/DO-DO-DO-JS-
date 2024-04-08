const nums=[1,2,3]

const mytotal = nums.reduce((acc,curr) => {
    console.log(`${acc} and ${curr}`) 
    return acc+curr
},0)
console.log(mytotal);