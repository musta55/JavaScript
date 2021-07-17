var Rectangle=function(width,height)
{
    this.width=width
    this.height=height
    this.draw=function()
    {
        console.log('I am rectangle')
       this.printProperties()
       console.log(this)
    }
    this.printProperties=function () {
        console.log('My width is '+this.width)
        console.log('My Height is '+this.height)
    }
    this.getArea=function () {
        console.log(`area is ${this.width*this.height}`) 
    }
}

var rect3=new Rectangle(34,56)
rect3.draw()
rect3.getArea()


//new empty object created
//constructor er sathe this k bind kore
function myNew(constructor)
{
    var obj={}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj,argsArray.slice(1))

    return obj
}

var rect4=myNew(Rectangle,23,54)
rect4.draw()

//DRY

var obj={}
var str=new String('Musta')

function test() {
    console.log('function '+str)
}

var Rect=new Function('width','height',` this.width=width
this.height=height
this.draw=function()
{
    console.log('I am rectangle')
   this.printProperties()
   console.log(this)
}
this.printProperties=function () {
    console.log('My width is '+this.width)
    console.log('My Height is '+this.height)
}`)

var rect5=new Rect(4,5)
console.log(rect5.draw())

console.log(test.name,test.length)

function myFunc(c,d) {
    console.log(this)
    console.log(this.a+this.b+c+d)
}

//Call, Apply is used when we want to tell that 
//which object will be assossiated with this call
myFunc.call({a:43,b:34},23,4)
// myFunc.call({a:443,b:644})
//Apply er mddhe argument gula array akare pathate hbe
myFunc.apply({a:43,b:34},[32,5])
// myFunc()

//Bind
var testBind=myFunc.bind({a:4,b:3})
testBind(34,66)

