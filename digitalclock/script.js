

let text = document.getElementById("time")

setInterval(function() {
  let a = new Date()
  let h = a.getHours()
  let m = a.getMinutes()
  let s = a.getSeconds()
  let d = a.getDate()
  let f = a.getDay()
  let g = a.getMonth()
  text.innerHTML = `<div class = "right">${h} : ${m} : ${s}</div><div><h2>${d} / ${g} / ${f}</h2></div>`
}, 1000);


