

//there will be same result for a certain parameter
//this function will not cause any observable side effects

function sqr(n)
{
    return n*n
}

console.log(sqr(68))
console.log(sqr(6))
console.log(sqr(8))

var n=10
//not a pure function cz it has side effects
function change ()
{
    n=100
}

change()

console.log(n)

var point =
{
    x : 45,
    y: 30
}

function printPt(point)
{
    point.x=100
    point.y=300

    console.log(point)
}

printPt(point)
console.log(point)