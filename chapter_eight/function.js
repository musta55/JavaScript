//input output processing

var date=new Date()
date.getFullYear()

function add(a, b)
{
    console.log(a+b)
}

//invoke a function
add(24,45)
add(45,343)
//argument of a function(argument is an object)

function test(a,b,c)
{
    console.log(arguments)
}
test(1,3,54)
var sum=0
function addAll()
{
    for(var i=0;i<arguments.length;i++)
    {
        sum+=arguments[i]
        
    }
    return sum
}
sum=addAll(1,32,54,34,54,56,43,54,5,45)
console.log(`sum is ${sum}`)

function person(n,m)
{
    var name=n
    var mail=m
    return 
    {
        name: name,
        mail: mail
    }
}

var p1=person('mustahid','bsse1114@iit.du.ac.bd')
console.log(p1)