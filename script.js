// // script.js
// function speakScienceIntro() {
//     const lang = document.getElementById('langSelect').value;
//     const msg = new SpeechSynthesisUtterance("Welcome to Science. Let's explore the wonders of nature!");
//     msg.lang = lang;
//     window.speechSynthesis.speak(msg);
//   }
  
//   function submitQuiz(formId) {
//     const quiz = document.getElementById(formId);
//     let score = 0;
//     const answers = {
//       q1: "Sunlight",
//       q2: "Lungs",
//       q3: "River"
//     };
  
//     for (let q in answers) {
//       const selected = quiz.querySelector(input[name=${q}]:checked);
//       if (selected && selected.value === answers[q]) {
//         score++;
//       }
//     }
  
//     document.getElementById("quizResult").textContent = Your score: ${score}/3;
//   }
function sendQuizResult(name, subject, score) {
  fetch('http://localhost:3000/submit-quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      subject: subject,
      score: score,
      time: new Date()
    })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => console.error("Error:", err));
}