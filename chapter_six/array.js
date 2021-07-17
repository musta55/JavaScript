//Array is a data structure where we can save multiple data in a single variable

var arr = [1,2,'name',4,5]
arr.push(9)
//element in the 1st place
// array push at index i  arr.splice(index,koyta delete hbe,data)
arr.splice(3, 0,'new element')
arr.unshift(54)
console.log(arr[4])
console.log(arr[5])
console.log(arr)


for(var i=0;i<arr.length;i++)
{
   var re= arr[i]%2==0?console.log('even '+arr[i]):''
    
}

//delete
arr.pop()
//Remove 1st elemnt
arr.shift()
arr.splice(3,2)      //# no index theke 2 ta element baad
arr.splice(4,1,'Replaced element')
console.log(arr)