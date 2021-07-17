// Inheritence Using prototype 

function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

//Parentbase Constructor
function Shape(color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('I am a common method')
}

function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}


Square.prototype.draw = function () {
    console.log('Drawing')
}




//Prototypical inheritance
extend(Shape, Square)
var sqr = new Square(45, 'green')

extend(Shape, Circle)
var circle = new Circle(3.14, 'Pink')

//Method overridden
Circle.prototype.common = function () {
    Shape.prototype.common.call(this)
    console.log('I am calling from circle.I have overridden')
}

var c2=new Circle(7,'red')


//Instance-> prototype-> Upper Object