//clear interface , 1 argument

function add(a,b,c) {
    return a+b+c
}

add(41,4,2)

//design pattern
//organized way implementation

function currying(a) {
    return function (b) {
        return function(c)
        {
            return a+b+c
        }
    }
}

var result=currying(4)(43)(24)
console.log(result)