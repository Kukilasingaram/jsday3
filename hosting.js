const obj1 ={
    age:5,
    name:"person 1",
};
const obj2 ={
    
    name:"person 1",
    age:5,
};
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))
console.log(obj1 === obj2)