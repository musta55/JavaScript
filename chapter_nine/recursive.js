function recursive( n)
{
    if(n==0)return
    console.log('i am happy '+n+' times')
    recursive(--n)
}

recursive(10)
var s=0
function sum( n)
{
    if(n==0)return 
    s+=n
    
    sum(--n)
}

recursive(10)
sum(5)

console.log(s)

var factor=1
function fact( n)
{
    if(n==1)return 
    factor*=n
    
    fact(--n)
}

fact(5)

console.log(factor)


var arr=[1,4,5,32,2]

function sumOfArray(arr,lastIndex) {
    if(lastIndex<0)return 0

    return arr[lastIndex]+sumOfArray(arr,lastIndex-1)
    
}

console.log(arr,arr.length-1)