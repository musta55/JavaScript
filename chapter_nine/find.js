var arr=[1,45,6,5,435,9]
// var result=arr.find(function(value)
// {
//     return value==9
// })

// console.log(result)\\

// var result=arr.findIndex(function (value) {
//     return value==9
// })

// console.log(result)


function myFind(arr, cb) {
    for(var i=0;i<arr.length;i++)
    {
        if(cb(arr[i]))return arr[i]
    }
}


function odd(arr, cb) {
    var newArray=[]
    for(var i=0;i<arr.length;i++)
    {
        if(cb(arr[i]))newArray.push(arr[i])
    }
}

var result3=odd(arr,function(value) {
    return value%2==1
})


function myFindIndex(arr, cb) {
    for(var i=0;i<arr.length;i++)
    {
        if(cb(arr[i]))return i
    }
}


var result=myFindIndex(arr,function(value)
{
    return value==9
})

console.log(result)

console.log(result)