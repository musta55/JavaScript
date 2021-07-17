
  //chapter 16

  let n=10
  if(n>5)
  {
      throw new Error('n is greater than 5')
  }

  let n=Number.parseInt('24')
  function changeToInt(v) {
    let result=Number.parseInt(v)
    try {
      
    } catch (error) {
      
    }
  }

  let result=changeToInt('sadasf32432r3.243dsad')

  function makeWords(text) {
    try {
      let str=text.trim()
    let words=str.split(' ')
    return words
    } catch (error) {
      console.log(e)
    }
  
  }
class CustomError extends Error{
  constructor(msg){
    super(msg)
    if(Error.captureStackTrace){
      Error.captureStackTrace(this,CustomError)
    }
  }
}
  // let words=makeWords('      I am twinkle cats        ')

  //throwing an error
  try {
    console.log('I am line 1')
    console.log('I am line 2')
    throw new CustomError('I am yourer baap')
    console.log('I am line 3')

    console.log('I am line 4')

  } catch (error) {
    console.dir(error)
  }
  finally{
    console.log('I am finally block')
  }

  //custom error