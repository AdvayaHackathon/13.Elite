let score = 0;
let questionAnswered = false;

function submitAnswer(answer) {
  if (questionAnswered) return;
  if (answer === 5) {
    score++;
  }
  questionAnswered = true;
  alert("Answer submitted!");
}

function submitQuiz() {
  let name = "Sakshi";       // You can replace with prompt() if needed
  let subject = "Maths";

  sendQuizResult(name, subject, score);
}

function sendQuizResult(name, subject, score) {
  fetch('http://localhost:3000/submit-quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      subject: subject,
      score: score,
      submittedAt: new Date()
    })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => console.error("Error:", err));
}