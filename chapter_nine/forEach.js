var arr=[1,2,3,4,5]
var sum=0
//callBack Function
// arr.forEach(function(value, index, arr)
// {
//     console.log(value,index,arr)
//     sum+=value
// })

// console.log(sum)

function forEach(arr, cb)
{
    for(var i=0;i<arr.length;i++)
    {
       cb(arr[i],i, arr)
    }
} 
var sum=0
forEach(arr,function(value,index,arr)
{
    console.log(value,index,arr)

    sum+=value
  
})

console.log('sum is '+sum)

forEach(arr,function (value,index,arr) {
    arr[index] =value +5
    console.log('updated '+(index+1)+' items '+value,index,arr)
})