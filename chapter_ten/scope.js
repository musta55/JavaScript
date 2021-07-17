// Javascript Engine
// is an another program that can read,
// understand and translate javascript code
// v8, chakra,  spider monkey Javascript core


function a() {
    b()
    console.log(' i am function a')

}
function b() {
    d()
    console.log(' i am function b')
    
}


function c() {
    
    console.log(' i am function c')
    
}
function d() {
    c()
    console.log(' i am function d')
    
}

var x=100
a()
console.log(' I am global')


b()

// JIT Just In Time compiler