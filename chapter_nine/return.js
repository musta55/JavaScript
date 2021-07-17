
//creating executable function


// function greet(msg) {
//     function greetings (name) {
//         return msg+', '+name+' !'
//     }

//     return  greetings
// }
// var gm=greet('Good Morning')
// var gn=greet('Good Night')
// var hello=greet('hello')
// console.log(typeof gm)

// var msg=gm('Mustahid')

// console.log(msg)

// console.log(gn('Twinkle hats'))
// console.log(hello('raisa'))

function base(b) {
    
    return  function (n) {
        
        var result=1
        for(var i=0;i<b;i++)
        {
            result*=n
        }
        return result
    }

}

var base10=base(5)
console.log(base10(3))


var base10=base(5)
console.log(base10(3))


var base10=base(5)
console.log(base10(3))


var base10=base(5)
console.log(base10(3))