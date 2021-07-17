var person=
[
    {
        name:'A',
        age:13
    },
    {
        name:'B',
        age:26
    },
    {
        name:'C',
        age:43
    },
    {
        name:'D',
        age:22
    },
    
]

var arr=[3,6,33,2,45,4,54,5,45,34,3,-3,423,4,5,2435,25,253]

// arr.sort()
// console.log(arr)

// person.sort()
// console.log(person)

arr.sort(function (a,b) {
    if(a>b)return -1
    else if(a<b)return 1
    else return 0
    
})

console.log(arr)

person.sort(function (a,b) {
    if(a.age>b.age)return -1
    else if(a.age<b.age)return 1
    else return 0
})


console.log(person)

var res1=arr.every(function (a) {
    return a%2==0
})

console.log(res1)

var res2=arr.every(function (a) {
    return a>0
})

console.log(res2)

var res3=arr.some(function (value) {
    return value%2==0
})

console.log(res3)


var res4=arr.some(function (value) {
    return value<0
})

console.log(res4)
