//iterator

const arr = [1, 2, 3]

// function createIterator(collection)
// {
//     let i=0
//     return {
//         next()
//         {
//             return {
//                 done: i>=collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate =createIterator(arr)

let iterate = arr[Symbol.iterator]()
console.log(iterate.next())

//Symbol iterator

let str = 'text'
let iteratetext = str[Symbol.iterator]()


//For of loop

for (let v of arr) {
    console.log(v)
}



//Generator in javascript

// Generator :kono collection dile iterator object return kore

[Symbol.iterator]: function*() {
    let currentValue = this.start
    while (currentValue < this.end) {
        yield currentValue++
    }
}

//yield helps to generate iterator
// It kinda pause state of iterator
function* generate() {
    yield 1
    yield 2
    yield* anotherGenerator()
    return 'hello'


}

function anotherGenerator() {
    yield 2
}

function* infinitemaker() {
    let i = 0;
    while (true) {
        yield i++
    }
}

let it = infinitemaker();
function* generate(collection) {
    for (let i = 0; i < collection.length; i++)
        yield collection[i]
}

// set unique value  provide kore
let set = new Set([1, 2, 3])
set.add(23)
set.add(2435)


console.log(set)
console.log(set.has())
console.log(set.toJSON())

for (let v of set) {
    console.log(set.entries())
}

// Map in Javascript
// Map er key value pair
let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 40]
])
map.delete('c')
map.get('a')
map.set('d', 50)
console.log(map)

for (let [k, v] of map) { //destructure
    console.log(k, v)
}

map.forEach((v, k) => {
    console.log(v, k)
})

// Map er je kono kichu key hote pare
map.set({ name: "HM Nayem" }, 45)

// weak set
let a = { a: 10 }, b = { b: 20 }
let set = new Set([a, b])



let array = [...set]  //set to array
console.log(array)

//Weak set e only object rakha jay

let weakSet = new WeakSet()


//Weak map
let weakMap = new WeakMap([[a, 45], [b, 23]])

//Class syntax in ES6 OOP

// function Rectangle(width,height){
//     this.width=width
//     this.height=height
// }

// Rectangle.prototype.draw =function(){
//     console.log(this)
//     console.log('Drawings...')

// }
// let rect1= new Rectangle(12,25)


class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    draw() {
        console.log('Drawing ...')
    }
}

let rect1 = new Rectangle(21, 45)

class Circle {
    constructor(radius) {
        this.radius = radius

        //eta main class e included hoye gese
        this.description = function () {
            console.log('This is a circle')
        }
    }
    name = 'Mustahid Hasan'
    //eta o main class e included hoye gese
    test2 = function () {
        console.log('This is a circle out of the constructor')
    }
    //Egula by default proto er moddhe include hobe
    getArea() {
        return 3.14 * this.radius * this.radius
    }
}
let cir = new Circle(2)
console.log(cir.getArea())


//ES6 class properties
//by default proto er moddhe thakbe method gulo


//ES 6 static method
// Class diye direct access kora jay,
// jegula r ""NEW"" keyword dara instance create
// korte hoy na ogula static method

Math.random()

class Person {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    print() {
        console.log(this.name, this.email)
    }

    static create(str) {
        let person = JSON.parse(str)
        return new Person(person.name, person.email)
    }
}

let str = `{"name":"mustahid hasan","email":"mustahidhasan@gmail.com"}`
let p1 = Person.create(str)

//This property of ES6
//Use strict mehtod
function Shape() {
    this.draw = function () {
        console.log(this)
    }
}

let s1 = new Shape()
let anotherDraw = s1.draw
anotherDraw()


//Private data or abstract korte
// hole # keyword ta use korte hbe

class Circle2 {
    #privateData = 3
    constructor(radius) {
        this.radius = radius
    }
    #privateMethod() {
        console.log('this is a private method')
    }
    get value() {
        return this.#privateData
    }
}

const circle2 = new Circle2()
circle2.privateData

const radius2 = new WeakMap()
const _name = new WeakMap

class fancying {

    emoji = ':)'
    #message

    set #decoratorMessage(message) {
        this.#message = message
    }

    get #decoratorMessage() {
        return `${this.emoji}  ${this.message} ${this.emoji}`
    }

    printPrivate(message) {
        this.#decoratorMessage = message
        console.log(this.#decoratorMessage)
    }

}

//private method
class MyCounter {
    #count = 30
    constructor() {
        this.#count = 20
    }
    get counters() {
        return this.#count.get(this)
    }
    set counters(counts) {
        this.#count.set(this, counts)
    }
}

let counter = new MyCounter();
counter.counters(24)



//Getter and setter

class Persons {
    #firstName = 0
    #lastName = 0
    constructor(value1, value2) {
        this.#firstName = value1
        this.#lastName = value2
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`
    }
    set fullName(value) {
        const parts = value.split(' ')
        this.#firstName = parts[0]
        this.#lastName = parts[1]
    }
}

const p3 = new Persons('Mustahid Hasan')

console.log(p3.fullName)

console.log(p3.fullName = 'Raisa marjaan')

console.log(p3.fullName)


class CoffeeMachine {

    #waterAmount = 0;

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) value = 0;
        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error


//Inheritance in ES6

// class Shape {
//     constructor(color) {
//         this.color = color
//     }
//     draw() {
//         console.log('Drawing...')
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height, color) {
//         super(color)
//         this.width = width
//         this.height = height
//     }

//     calculate() {
//         return this.width * this.height

//     }
//     //Method overriding
//     draw() {
//         console.log('Drawing a rectangle ....')
//     }

// }

import Rectangle from './Rectangle'
//to import all module
import * as func from './func'

let r = new Rectangle(4, 5, 'red')
console.log(r.draw())

//ES6 module  to make it clear
//jodi koek ta k import kora lage using desctructure method

import {add,div} from './func'