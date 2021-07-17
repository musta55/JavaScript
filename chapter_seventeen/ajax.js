// Ajax
// Asynchonous Javascript And XML(json)
// Web API
// Data transfer by URL 
// URL hit kore browser e Data niye ashai AJAX er kaj




// const xhr=new XMLHttpRequest()
// xhr.open('get','http://jsonplaceholder.typicode.com/users')
// xhr.onreadystatechange=function (e) {
//     if(xhr.readyState==4){
//         if(xhr.status==200){
//             let users=JSON.parse(xhr.response)
//             console.log(users)
//             // console.log(xhr.response)
//         }
//         else{
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()

//Callback (AJAX implementation)

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)


    xhr.onreadystatechange = (e)=> {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.response)
                callback(null, response)
            }
            else {
                callback(xhr.status, null)
            }
        }
    }
    xhr.send()
}

getRequest('http://jsonplaceholder.typicode.com/users', (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(res)
        res.forEach(r=>alert(r.name))
    }
})

getRequest('http://jsonplaceholder.typicode.com/posts', (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
      res.forEach(r => {
        console.log( r.title) 
      });
    }
})





const BASE_URL='https://jsonplaceholder.typicode.com'

getRequest(`${BASE_URL}/posts/1`,(err,res)=>{
    if(err){
        throw new Error('Error occurred')
    }

    let {userId}=res

    getRequest(`${BASE_URL}/users/${userId}`,(err,res)=>{
        if(err){
            throw new Error('Error Occurred')
        }

        getRequest(`${BASE_URL}/posts/1/comments/${res.id}`,(err,res)=>{
            if(err){
                throw new Error('Error Occurred')

            }

            console.log(res)
        })
    })
})

let arr=[1,2,23]

let sqrArr=arr.map(v=>v*v)
console.log(sqrArr)

function asyncMap(arr,cb){
    return arr.map(v=>{
        // setTimeout(cb.bind(null,v),0)
        setTimeout(()=>cb(v),0)
    })
}

let qbArr=asyncMap(arr,v=>v*v*v)
console.log(qbArr)