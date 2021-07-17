const delay=s=>new Promise(resolve=> setTimeout
    (resolve,s*1000))

    delay(2).then(()=>console.log('2 second delay'))
    delay(3).then(()=>console.log('3 second delay'))

    delay(1).then(()=>console.log('1 second delay'))

    delay(6).then(()=>console.log('6 second delay'))


    let p1=Promise.resolve('test')
    p1.then(v=>console.log(v))

    let p2=Promise.reject('Error')
    p2.catch(e=>console.log(e))


    let q1=Promise.resolve('One')
    let q2=Promise.resolve('two')
    let q3=Promise.resolve('three')

    let promiseArr =[q1,q2,q3]
    Promise.all(promiseArr).then(arr=>{
        console.log(arr)
    })

    let r1=new Promise(resolve=>{
        setTimeout(resolve,5000,'one')
    })

    let r2=new Promise(resolve=>{
        setTimeout(resolve,2000,'two')
    })
    let r3=new Promise(resolve=>{
        setTimeout(resolve,4000,'three')
    })

    let promiseArr=[r1,r2,r3]

    Promise.all(promiseArr).then(arr=>console.log(arr))

    Promise.race(promiseArr)
    .then(v=> console.log(v))