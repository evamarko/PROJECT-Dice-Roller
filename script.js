const btn = document.querySelector(".btn");
const cubeImg = document.querySelector(".cube-image");
const resultSection = document.querySelector(".result");

let counter = 0;
let clicks = 0;

const createParagraph = (content, whereToAdd) => {
  const p = document.createElement("p");
  p.textContent = content;
  whereToAdd.append(p);
};

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  cubeImg.src = "img/" + randomNumber + ".jpg";
  counter = counter + randomNumber;

  resultSection.textContent = "";
  createParagraph(counter, resultSection);

  clicks++;

  if (clicks < 5 && counter < 20) {
    createParagraph("Keep playing!", resultSection);
  } else if (clicks <= 5 && counter >= 20) {
    createParagraph("You won the game!", resultSection);
    btn.style.visibility = "hidden";
  } else if (clicks >= 5 && counter <= 20) {
    createParagraph("You lost the game!", resultSection);
    btn.style.visibility = "hidden";
  }
});
