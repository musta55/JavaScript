//Prototype
//The prototype is an object that is associated with every functions and objects by default in JavaScript,
// where function's prototype property is accessible and 
//modifiable and object's prototype property (aka attribute) is not visible.
function Person(name)
{
    this.name=name
}

var p1= new Person("Mustahid Hasan")
console.log(p1)
var person={
    name:"Mustahid Hasan"
}

console.log(person)
//Property Descriptor
//There are some default attributes of certain properties
for(var i in Person)
{
    console.log(i)
}

console.log(Object.keys(person))

var descriptor = Object.getOwnPropertyDescriptor(person,'name')
console.log(descriptor)

let baseObj=Object.getPrototypeOf(person)
let descriptor2=Object.getOwnPropertyDescriptor(baseObj,'toString')
console.log(descriptor2)

Object.defineProperty(person,'name',{
    enumerable:false,
   writable:false,
   configurable:false
})

//How to get object prototype

var p1=new Person('Mustahid Hasan')
//Person is p1's parent class

Person.prototype.PI=3.141 
console.log(Person.prototype)
