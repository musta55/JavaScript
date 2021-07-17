let promiseToCleanTheRoom=new Promise(function (resolve,reject) {


    //cleaning the room

    let isClean=true
    if(isClean)
    {
        resolve('clean')
    }
    else{
        reject('Not clean')
    }
    
})

promiseToCleanTheRoom.then(function(fromResolve){
    console.log(`The room is ${fromResolve}`)
}).catch(function(fromreject){
    console.log(`The room is ${fromreject}`)
})

let cleanRoom=function(){z 
   return new Promise(function(resolve,reject){
        resolve ('cleaned the Room')
    })
}

let removeGarbage=function(message){
 return   new Promise (function(resolve,reject){
        resolve(message+'Removes the garbage')
    })
}
    let winIcecream=function(message){
    return    new Promise(function(resolve,reject){
            resolve(message+'won icecream')
        })
    }

//    cleanRoom().then(function(result){
//     return removeGarbage()
//    }).then(function(result){
//     return  winIcecream()
//    }).then(function(result){
//        console.log('Finished '+result)
//    })

Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
    console.log('All Finished finished')
})

Promise.race([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
    console.log('One of them are  finished')
})

//To handle asynchronous javascript task

// let p1=new Promise((resolve,reject)=>{
//     setTimeout(resolve,5000,'one')
// })

// let p2=new Promise((resolve,reject)=>{
//     setTimeout(resolve,3000,'two')
// })

// p1.then((v)=>{
// console.log(v)
// })

// console.log(p1)

function getIphone(isPassed){
    return new promise((resolve,reject)=>{
        setTimeout(() => {
            if(isPassed){
                resolve('I have got iphone')
            }
            else{
                reject(new Error('You have failed'))
            }
        }, 2000);
    })
}

console.log(getIphone(true))

getIphone(true).then((res)=>{
console.log(res)
})
.catch((e)=>{
    console.log(e.message)
})