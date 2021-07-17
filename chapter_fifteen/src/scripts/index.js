import '../styles/index.scss'
// class 1
// String template 

// var s= `kire mama ki khbor
//             valo achos?`
           

// console.log(s.trim())

var age=23
var name='Mustahid Hasan'

console.log(`My name is ${name} and I am ${age<18?'Not':''} adult`) 
console.log(name.padStart(15))
console.log(name.padEnd(25,'*'))
console.log('S'.repeat(10))



//Class 2 var vs let vs const

// Let block er moddhei kaj kore, otherwise error kore

//let dara declare korle block er moddheii var ta kaj kore
{

}

if(true){
    let a=10
}


(function(){
    var abc='abc'
    console.log(abc)
})



//Class 3


//Declaration

// function add(a,b)
// {
//     return a+b
// }

//Expression

// let sum=function (a,b)
// {
//     return a+b
// }


// Arrow function(fat)
let add= (a,b) =>  a+b          //implicit return
 
let sqr = x => x*x              //1 ta parameter thakle 1st bracket o dite hbe na


add(23,4)
sqr(34)
function testMe(){
    console.log(this)
}

testMe()

let obj={
    name:'Mustahid Hasan',
    age:23,
    print: () => {
        console.log(this)
    }

}
obj.print()

//Arrow function er this always tar parent k indicate kore
//Arrow function er nijer kono this nei, tar parent k refer kore
let obj2={
    name:'Sakib',
    age:23,
    print: function(){      // Eta normal function er motoi but porer gula arrow er moto declare kora jabe
        setTimeout(() =>{
            console.log('Hello '+this.name)
        },1000)
    } 
}

obj2.print()



//Class 3 Default parameter

function sqr(n=1){
    return n*n
}

console.log(sqr())

function greet(name='mustahid hasan',msg='hello'){
    console.log(`${msg}! ${name}`)
}

greet()


//Class 4 custom iterator (kisu bujhi nai)
let obj3={
    start:1,
    end:10,
    [Symbol.iterator]:function()
    {
         let currentValue=this.start
         const self=this
         return 
         {
             next()
             {
                 return
                 {
                     done: currentValue >self.end,
                     value:currentValue >self.end? undefined: currentValue++
                 }
             }
         }
    }
}
// for(v of obj3)
// {
//     console.log(v)
// }


let iterate =obj[Symbol.iterator]()
console.log(iterate.next())
console.log(iterate.next())

console.log(iterate.next())

console.log(iterate.next())

console.log(iterate.next())
console.log(iterate.next())

//class 5 rest(when we take it as argument make sure it stays last) and spread operator
 
function sum(...rest)
{
    return rest.reduce((a,b)=>a+b)
}
console.log('Sum is '+sum(1,32,345,45,55))


function multiply(...rest2){
    return rest2.reduce((a,b)=>a*b)
}

function sort(...rest){
    return rest.reduce((a,b)=>a>b)
}
console.log(`sort is ${sort(2,54,35,3)}`)
console.log(`Multiply is ${multiply(23,4,23)}`)


let arr=[1,2,43]
console.log(...arr)

let obj3=
{
    a:23,
    b:34,
    c:24
}

let obj4={
    ...obj3
}
//Object cloning[Evabe clone korle obj5 k k change korleo
// obj4 change hoy na
// let obj5={
//     ...obj4
// }


let a=10, b=20

let obj6={
    a, //a=a shorthand
    b,
    print() {
        console.log(this)
    }
}

obj6.print()


let person={
    names:'mustahid',
    emails: 'mustahid@gmail.com',
    address:
    {
        city:'dhaka',
        country:'Bangladesh'
    }
}

//destruction 
let{names,emails,address:{city,country}}=person



console.log(names,emails,city,country)

let arr4=[23,4,324,34]
let [first,second,,last]=arr4

console.log(first,second,last)

//Object from entries

let obj7={
    a:10,
    b:30
}

//Object to array transform
console.log(Object.entries(obj7))

let objArr=[
    ['a',10],
    ['b',30]
]

console.log(Object.fromEntries(objArr))

//Symbol javascript er primitive data type
//symbol  always have unique value (non public properties)
// kono ekta object k private korar jnno
let s1= Symbol()
let s2=Symbol('test symbol')

console.log(s1,s2)

console.log(s1===s2)

// let tossing System enum


// let toss={
//     Head : Symbol('Head'),
//     Tail : Symbol('Tail')
// }

// toss.Head()

// console.log('hello es6')
// console.log('Kire mama')

const arr6=[1,3,65,4]

for(let i=0;i<arr6.length;i++){
    console.log(arr6[i])
}
function createIterator(collection){
    let i=0
    return  {
        next(){
            return {
                done: i>=collection.length,
                value: collection[i++]
            }
        }
    }
}

let iterate2=createIterator(arr6)
console.log(iterate2.next())
console.log(iterate2.next())
console.log(iterate2.next())
console.log(iterate2.next())
