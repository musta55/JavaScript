var obj1={
    a:10,b:34,c:23
}

var obj2={
    k:10,b:34
}

//to create object
var obj2= Object.assign({},obj1)
obj2.x =100

console.log(obj2)