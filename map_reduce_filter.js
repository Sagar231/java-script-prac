let arr = [45,23,21]
//map used when we have to create a new array
//forEach is used when we have to work on the same array
let a=arr.map((value)=>{
       // map((value,index,array))
  console.log(value)
  //could be (value,inex,array)
  return value+1
})
console.log(a)

//filter
let arr2 = [3,5,67,84,34,0,23]
let a2 = arr2.filter((i)=>{
  return i<40
})
console.log(a2)

//reduce
let arr3 = [1,2,3,5,2,1]
let a3 = arr3.reduce((h1,h2)=>{
  return h1+h2
})
console.log(a3)
//so basically "reduce" first takes two values of array
//then it runs the function with those two values
//finally it runs the returned value in first cycle with the next value of array and keeps going untill reches the end
