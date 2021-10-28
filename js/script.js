const question = document.querySelectorAll(".ques");
const answer = document.querySelectorAll(".answ");

question.forEach((q, i) => {
  q.addEventListener("click", () => {
    if (q.classList.contains("ques-active")) {
      q.classList.toggle("ques-active");
      answer[i].classList.toggle("answ-active");
    } else {
      question.forEach((q, i) => {
        q.classList.remove("ques-active");
        answer[i].classList.remove("answ-active");
      });
      q.classList.add("ques-active");
      answer[i].classList.add("answ-active");
    }
  });
});
