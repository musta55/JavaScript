

//closure, bairer kono scope theke kono var jodi arek scope e use kore tkhn ota closure
var b=10
function a() {
    var x=5
    return function () {
        console.log(x)
    }
    
}
var abc=a()
console.dir(abc)