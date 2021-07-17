var rect={
    width:100,
    height:50,
    draw:function()
    {
        console.log('I am rectangle')
       this.printProperties()
    },
    printProperties:function () {
        console.log('My width is '+this.width)
        console.log('My Height is '+this.height)
    }
}

rect.draw()
rect.height=150
rect.draw()


function myFunc() {
    console.log(this)
}
new myFunc()

var another={
    width:23,
    height:45,
    print: rect.printProperties
}

another.print()