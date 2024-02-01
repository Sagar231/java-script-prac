let p1 = new Promise(function(resolve, reject) {
    console.log("the promise is pending")
    setTimeout(() => {
      //console.log("The promise is fulfilled")
      resolve(true)
    }, 3000)
  })
  let p2 = new Promise(function(resolve, reject) {
    console.log("the promise is pending")
    setTimeout(() => {
      //console.log("The promise is rejected")
      reject(new Error("I am an error"))
    }, 3000)
  })
  
  console.log(p1,p2)
  
  p1.then((value)=>{
    console.log(value)
  })
  
  p2.catch((error)=>{
    console.log("some error occured in p2")
  })
  
  // p2.then((value)=>{
  //   console.log(value)
  // })