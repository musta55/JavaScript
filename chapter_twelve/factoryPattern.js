var createRect=function(width,height)
{
    return{
        width:width,
        height:height,
        draw:function()
        {
            console.log('I am rectangle')
           this.printProperties()
           console.log(this)
        },
        printProperties:function () {
            console.log('My width is '+this.width)
            console.log('My Height is '+this.height)
        }
    }
    
}


var rec1=createRect(23,54)
rec1.draw()

var rec2=createRect(244,54)
rec2.draw()

