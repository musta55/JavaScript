function extend(Parent,Child) {
    Child.prototype=Object.create(Parent.prototype)
    Child.prototype.constructor=Child
}


function Shape(color) {
    this.color = color
}

Shape.prototype.draw = function(){
    console.log('This is draw method')
}

Shape.prototype.common = function(){
    console.log('This is common method')
}


function Square(width,color) {
    Shape.call(this,color)
    this.width = width
}

extend(Shape,Square)
extend(Shape,Circle)

Square.prototype.common=function()
{
    console.log('This is a overridden method from square')
}

function Circle(radius,color) {
    Shape.call(this,color)
    this.radius = radius
}

Circle.prototype.common=function()
{
    console.log('This is a overridden method from circle')
}

var sq=new Square(23,'white')
var c=new Circle(2,'pink')
var s=new Shape('white')

var shapes=[s,c,sq]

//of use korle value dibe

for(var i of shapes){
    i.common()
}