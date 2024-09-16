const form = document.getElementById("quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const question = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");

form.addEventListener("submit", (e) => {
  console.log("yes");
  e.preventDefault();

  question.forEach((notAnswered) => {
    notAnswered.classList.add("incorrect");
    notAnswered.classList.remove("correct");
  });

  const answerchecked = answers.filter((answer) => answer.checked);
  console.log(answerchecked);

  answerchecked.forEach((answer) => {
    const iscorrect = answer.value === "true";
    console.log(iscorrect);
    const questionItem = answer.closest(".question-item");

    if (iscorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }

    const allTrue = answerchecked.every((answer) => answer.value === "true");
    // const allAnswered = question.length === answerchecked.length

    if (allTrue) {
      alert.classList.add("active");
      setTimeout(() => {
        alert.classList.remove("active");
      }, 2000);
    }
  });
});
