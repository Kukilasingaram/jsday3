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




let xhr=new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload=function(){
    const data=JSON.parse(xhr.response);
    console.log(data)
    console.log(xhr.status)
    for(let i=0;i<data.length;i++){
        console.log("Name:",data[i].name.common)
        console.log("Flag:",data[i].flags.png)
        console.log("Regions:",data[i].region)
        console.log("Sub-region:",data[i].subregion)
        console.log("Population:",data[i].population)
            
    
}
}