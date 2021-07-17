var arr=[1,20,3,6,5]

// var sqrArr= arr.map(function (value) {
//     // return Math.floor(Math.random()*100)
//     return value*value
// })
// console.log(arr)
// console.log(sqrArr)


function map(arr,cb) {
    var newArr=[]
    for (let index = 0; index < arr.length; index++) {
        temp= cb(arr[index])
        newArr.push(temp)
        
    }
    return newArr
}
// console.log(map(arr))
var triple=map(arr,function(value)
{
    return value*3
})

var mten=map(arr,function(value)
{
    return value*10
})

console.log(arr)

console.log(triple)
console.log(mten)
