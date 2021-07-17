//Prototype means parent object

//Instance member
function Square(width)
{
    this.width=width
    this.getWidth=function()
    {
        console.log(`Width is ${this.width}`)
        // this.draw()
    }
}


//method overwrite
//Prototype function or member

Square.prototype={
    draw: function () {
        this.getWidth()
        console.log('Drawing Square')
    },
    toString: function()
    {
        return `My width is: ${this.width}`
    }
}

var sqr1=new Square(12)
var sqr2=new Square(23)
//Only instantiate property
console.log(Object.keys(sqr1))


//Prototype property and instantaite property
for(var i in sqr1)
{
    console.log(i)
}