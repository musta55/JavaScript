// Closure is when a function is able to remember and access
//it's lexical scope even when that function executing outside it's lexical scope

//able to remember and access it's lexical scope

//when that function executing outside it's lexical scope


//is a kind of storage, 
//because we can access msg variable from outside of its scope


// function test() {
//     var msg='I am learning lexical scope and closure'
    
//     function sayMsg() {
//         console.log(msg)
//     }   
//     sayMsg()
// }

function test() {
    var msg='I am learning lexical scope and closure'
    
    return function () {
        console.log(msg)
    } 
   
}
var saymsg=test()
saymsg()

for(var i=1;i<=50;i++)
{

    //Ifee (Immediately-Invoked Function Expression)
    (function (n) {
        setTimeout(function () {
            console.log(n)
        },1000*n)
    })(i)
    
}