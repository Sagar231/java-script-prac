let a = [`What do you get when you mix a cocker spaniel, a poodle, and a ghost? A cocker-poodle boo.`,
  `How do celebrities stay cool? They have many fans.`,
  `What does a pickle say when he wants to play cards? "Dill me in!"`,
  `How much money does a pirate pay for corn? A buccaneer.`,
  `Where do young trees go to learn? Elementree school.`,
  `Why do bees have sticky hair? Because they use a honeycomb.`,
  `How did the student feel when he learned about electricity? Totally shocked.`,
  `What do you call a bee that can't make up its mind? A Maybe.`,
  `Why was six afraid of seven? Because 7-8-9.`,
  `If April showers bring May flowers, what do May flowers bring? Pilgrims.`,
  `I tried to catch fog yesterday. Mist.`,
  `What do you call a hippie's wife? Mississippi.`,
  `Two peanuts were walking down the street. One was a-salted.`,
  `How can you tell it’s a dogwood tree? By the bark.`,
  `What did the buffalo say when his kid went to college? Bison.`,
  `What did the mayonnaise say when the refrigerator door was opened? Close the door, I'm dressing.`,
  `What's the stinkiest planet? Poopiter.`]

let b = Math.floor(Math.random() * a.length)

let c = document.getElementById("JokeOfDay")

c.style.font = "italic bold 20px arial,serif"

c.innerHTML = a[b]
