// let p1 = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log("resolved after 2 seconds");
//     resolve(56)
//   }, 2000)
// })

// p1.then((value) => {
//   console.log(value)
//   let p2 = new Promise(function(resolve, reject) {
//     setTimeout(()=>{resolve("promise 2")},2000)
//   })
//   return p2
// }).then((value) => {
//   console.log("we are done") 
//   return 2  // here JS will convert this 2 into instant returned promise with a value 2
// }).then((value)=>{
//   console.log(value + " done for sure now")
// })

const loadScript = (src) => {
    return new Promise(function(resolve, reject) {
      let script = document.createElement("script")
      script.type = "text/javascript"
      script.src = src
      document.body.appendChild(script);
      script.onload = () => {
        resolve("script loded all n good")
      }
      script.onerror = () => {
        reject(0)
      }
  
    })
  }
  
  let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
  p1.then((value) => {
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
  }).then((value) => {
    console.log("second script ready sir")
  }).catch((error) => {
    console.log("we are sorry but we are having problems with this source")
  })