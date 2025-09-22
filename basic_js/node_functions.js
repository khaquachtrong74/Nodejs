function square(number){
    return number*number
}
console.log(square(2)) // 4

function changeAttrObject(theObject){
    theObject.make = "Toyota";
    return theObject
}
const myCar={
    make: "Honda",
    model: "Accord",
    year: 1998,
}
console.log(myCar.make)
console.log(changeAttrObject(myCar).make)

function myFunc(theArr){
    // change
    theArr[0] = 30;
}
const arr=[45];
console.log(arr[0]);
myFunc(arr);
console.log(arr[0]);

