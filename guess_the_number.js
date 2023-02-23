let number = Math.floor(Math.random() * 31)

let chances = 0
let a = 0
do {
  a = prompt("enter a number not more then 30: ")
  if (a > number) {
    console.log(`${a} is grater then the actual number`)
  }
  else if (a < number) {
    console.log(`${a} is less then the actual number`)
  }
  else {
    console.log(`${a} is the right guess, good work!`)
  }
  chances += 1
} while (a != number)
console.log("Your score was ", (30 - chances))