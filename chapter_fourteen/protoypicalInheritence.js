

// Inheritence Using prototype 

function Shape(color) {
    this.color=color
}

Shape.prototype.common= function()
    { 
                console.log('I am a common method')
    }
 
function Square(width,color){
    Shape.call(this,color)
    this.width=width
}

Square.prototype.draw =function()
    {
        console.log('Drawing')
    }

Square.prototype=Object.create(Shape.prototype)
Square.prototype.constructor=Square
var shape=new Shape()
var sqr=new Square(45,'green')

// shape-> Shape -> Object
// sqr-> Square -> Object
//sqr->Square ->Shape ->Object
var circle=new Circle()

function Circle() {
    
}
//Prototypical inheritance
Circle.prototype=Object.create(Shape.prototype)

var circle=new Circle()