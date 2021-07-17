var arr =[23,5,34,55,434,3,53,56,146,4]

// var filteredArr=arr.filter(function (value) {
//     return value%2==1
// })

// console.log(filteredArr)\

function myFilter(arr,cb) {
    var newArr=[]
    for(var i=0;i<arr.length;i++)
    {
       var bool=cb(arr[i])
        if(bool)newArr.push(arr[i])
    }
    return newArr
}
var temp=myFilter(arr,function(value) {
    return value%2==1

})
console.log(temp)