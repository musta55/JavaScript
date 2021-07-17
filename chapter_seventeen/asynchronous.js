 //Sychronous programming means that it executes a task at a certain time
 //And it does not allow to break the line

 //Asynchronous kaj jomay rakhbe na

//  You can execute multiple things at a time and you don't have 
//  to finish executing the current thing in order to move on
//  to next one

console.log('Í am line 1')
setTimeout(() => {
    console.log('Í am line 2')
}, 6000);



setTimeout(() => {
    console.log('Í am line 3')
}, 3000);

setTimeout(() => {
   
console.log('Í am line 4')
}, 000);



setTimeout(() => {
   
    console.log('Í am line 5')
    }, 2000);
    
    
function sayMyName(name) {
    let result
    setTimeout(() => {
       result=name
    }, 3000);
    return result
}
//
let output=sayMyName('mUSTAHId Hasan')
console.log(output)

//Javascript is a single threaded language and asynchronous
 