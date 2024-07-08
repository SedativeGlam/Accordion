const questAndAns = [
  {
    question: "Do You Accept All Major Credit Cards?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },

  {
    question: "Do You Suppport Local Farmers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },

  {
    question: "Do You Use Organic Ingredients?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
];

const container = document.querySelector(".container");
const qiFlex = document.querySelector(".question-icon-flex");

const displayQuestandAns = () => {
  questAndAns.forEach((item) => {
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion";
    accordionItem.innerHTML = `<div class="question-icon-flex">
          <h2 class="question">${item.question}</h2>
          <div class="plus-icon"><img src="images/Plus-icon.png" /></div>
          <div class="minus-icon"><img src="images/Minus-icon.png" /></div>
        </div>
        <div class="answer">
        <hr />
        <p class="text">${item.answer}</p>
        </div>`;
    container.appendChild(accordionItem);
  });
};
console.log(questAndAns);
displayQuestandAns();

const allAccordions = document.querySelectorAll(".accordion");
allAccordions.forEach((accordion) => {
  const plusIcon = accordion.querySelector(".plus-icon");
  const minusIcon = accordion.querySelector(".minus-icon");
  const answer = accordion.querySelector(".answer");

  plusIcon.addEventListener("click", () => {
    allAccordions.forEach((item) => {
      const plusIconn = item.querySelector(".plus-icon");
      const minusIconn = item.querySelector(".minus-icon");
      const answer = item.querySelector(".answer");

      answer.classList.remove("show");
      plusIconn.style.display = "block";
      minusIconn.style.display = "none";
    });

    answer.classList.toggle("show");
    plusIcon.style.display = "none";
    minusIcon.style.display = "block";
  });

  minusIcon.addEventListener("click", () => {
    answer.classList.remove("show");
    plusIcon.style.display = "block";
    minusIcon.style.display = "none";
  });
});
