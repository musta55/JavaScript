var a='abc'

//only function er moddhe declared var i onno jaygay access kora jay na
function x()
{
    function y()
    {
        var a=10
        console.log(a)
    }
    y()
}
x()

function test(n)
{
    function a()
    {
        return n%5==0
    }
    function b()
    {
        return n%3==0
    }

    
if(a()&&b())
{
    console.log(n+ ' is divisble by both 3 and 5')
}

   
}


test(15)