document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  const feedback = quiz.querySelector(".feedback");

  quiz.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const correct = button.dataset.correct === "true";

      quiz.querySelectorAll("button").forEach((choice) => {
        choice.classList.remove("correct", "incorrect");
      });

      button.classList.add(correct ? "correct" : "incorrect");
      feedback.textContent = correct
        ? quiz.dataset.success || "Correct — the child receives only exported or command-scoped values."
        : quiz.dataset.failure || "Not yet — ask whether the value was exported into the child's environment.";
    });
  });
});
