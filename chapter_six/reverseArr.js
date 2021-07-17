var arr= [23,456,34,64]
var revArr=[]
var j=0
for( var i=arr.length-1;i>=0;i--)
{
   revArr[j++]=arr[i]
}
for(var i=0;i<arr.length;i++)console.log(revArr[i])

console.log(arr.reverse())