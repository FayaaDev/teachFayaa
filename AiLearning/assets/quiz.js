document.querySelectorAll("[data-quiz]").forEach(function (quiz) {
  var answer = quiz.dataset.answer;
  var explanation = quiz.dataset.explanation;
  var feedback = quiz.querySelector(".quiz-feedback");

  quiz.querySelectorAll(".quiz-option").forEach(function (button) {
    button.addEventListener("click", function () {
      var correct = button.dataset.value === answer;

      quiz.querySelectorAll(".quiz-option").forEach(function (option) {
        option.disabled = true;
        if (option.dataset.value === answer) option.classList.add("correct");
      });

      if (!correct) button.classList.add("incorrect");
      feedback.dataset.state = correct ? "correct" : "incorrect";
      feedback.textContent = (correct ? "Correct. " : "Not yet. ") + explanation;
    });
  });
});
