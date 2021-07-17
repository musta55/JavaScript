//object literals
var obj={
    name:'mustahid',
    weight:72,
    sex:'Gender'
}

obj.hobby='cricket'
console.log(obj)

//object construct

var obj2=new Object()

obj2=obj
//dot notation
obj2.height='5\'9\"'

console.log(obj2)
console.log(`dot notation Name${obj2.name}`)
console.log(`Array notation weight${obj2['weight']}`)
