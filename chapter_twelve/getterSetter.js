var Rectangle=function (width,height) {

    //Abstruction can be implimented creating 
    //local variable

    var name='Mustahid Hasan'
    this.width=width
    this.height=height
    //closure
    var position={
        x:56,
        y:-75
    }
  

    var printProperties = function () {
        console.log(`My height is ${height}`)
        console.log(`My width is ${width}`)
    }

    // var printProperties = function () {
    //     console.log(`My height is ${height} using bind method`)
    //     console.log(`My width is ${width}`)
    // }.bind(this)

    // this.getPosition=function()
    // {
    //     return position
    // }
    this.draw=function () {
        console.log(`I am rectangle`)
        printProperties()
        console.log(`position is: ${position.x},${position.y}`)
    }

    Object.defineProperty(this, 'position', {
        get:function()
        {
            return position
        },
        set:function(value)
        {
            position=value
        }
    })
}
//Hiding implementation details
var rect7=new Rectangle(23,54)
rect7.draw()
rect7.position={
    x:-34,
    y:123
}
console.log(rect7.position)


