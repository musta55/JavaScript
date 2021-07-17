// 1.function can be stored in a variable

function add(a,b)
{
    return a+b
}

var sum=add
console.log('var '+sum(43,5))
// 2.function can be stored in an array

var arr =[]
arr.push(add)
console.log('array  '+arr[0](5,3))
// 3.function can be stored in an object
var obj= {
    sum: add
}

console.log('object '+obj.sum(34,3))

// 4.we can create function as need
setTimeout(function()
{
    console.log('i have created')
},500)
// 5.we can pass function as an arguments
// 6.we can return functions from another function

