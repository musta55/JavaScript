

//Function body can't change Primitive data 
//Unlike Object data
//Function can change object data
var n=10 //Pass by value
function change(n) {
    n=n+100
    console.log(n)
}
change(n)
console.log(n)

//Pass by reference
var obj={
    a:10,b:20
}
function changeMe(params) {
    params.a=params.a+100
    params.b=params.b+100
    console.log(params)
}
changeMe(obj)
console.log(obj)