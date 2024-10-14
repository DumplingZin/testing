// const button = document.getElementById("btn");
// const color = document.querySelector(".color");
// const colors = ["green", "red", "rgba(133,122,200)", "#ffff"];

// button.addEventListener("click", function () {
//   console.log(document.body);

//   document.body.style.backgroundColor = colors[getRandomNumber()];
//   color.textContent = colors[getRandomNumber()];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
let a = "#";
for (let i = 1; i <= 7; i++) {
  a += "#";
  console.log(letter);
}

let n = "";
while (i < 8) {
  n = n + "#";
  console.log(n);
  i++;
}

for (let i = 1; i <= 8; i++) {
  let output = "";
  if (i % 2 == 0) output += "#### ";
  if (i % 2 !== 0) output += " ####";
  output += "\n";
  console.log(output || i);
}

console.log("Iam ur \nson");
