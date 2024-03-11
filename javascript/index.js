function welcome() {
  let name = prompt("Hello! 🏄🏽‍♀️ What's your name?");
  let email = prompt("What's your email address?");
  alert("Hi " + name + "! Welcome on board 💫");
}
let retreatButton = document.querySelector("button");
retreatButton.addEventListener("click", welcome);

function magicalRetreats() {
  let question = prompt("Have you been on a retreat before?");
  question = question.toLowerCase().trim();
  if (question === "yes") {
    alert(
      "Awesome 🌟 Pick your favorite sports & we'll compose the perfect fit for you!"
    );
  } else {
    alert("Fantastic 🔥 Pick your favorite sports and we got you covered!");
  }
}
let sports = document.querySelectorAll("li");
for (let i = 0; i < sports.length; i++) {
  sports[i].addEventListener("click", magicalRetreats);
}
