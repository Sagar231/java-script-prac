console.log("print this thing")
//arrays are mutable unlike strings
//type of array is "objact"
let a  = [1,2,3,45,5,6]
let a2 = [4,67,89,45]
let b = a.toString()
console.log(b)
let c = a.join(" ")
let x  = 90
// .pop() like python
// .push() adds to the array and return the new length of the new array
// shift() removes and returns the first element of the array
// unshift() adds the element in the begining and returns the new length
// delete is an operator
let d = delete a[0]// returns true
// console.log(a) //the length remains the same of a <1 empty item>
let newarray = a.concat(a2) //adds the two arrays without affacting the origanals
//we can also do a.concat(a2,a3,a4) all will be added
let y = a.sort() // it sort alphabatically(first 1 then 2(even 2000) an so on)
console.log(y)

// create an compare function

let compare  = (a,b)=>{
   return a-b //for accending
  //b-a for decending
}
a.sort(compare)
console.log(a)
a.splice(2,3,1001,1002,1003,1004) //returns the deleted elements
//splice(start,how_many_remove,the_new_elements)
console.log(a)
// if we talk about slice then it doesn't affact the original array but instead it returns a new one .slice(2,6)
a.forEach((i)=>{
  console.log(i*i)
})
forEach(func())
array.from() //will be used to convert html collection to array
for (let i of a){
  console.log(i)
}
for (let i in num){console.log(num[i])}
