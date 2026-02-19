const form = document.getElementById("contactForm");
const submissionsDiv = document.getElementById("submissions");

let submissions = JSON.parse(localStorage.getItem("submissions")) || [];


function saveSubmission(event) {
  event.preventDefault();


  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const purpose = document.querySelector('input[name="purpose"]:checked')?.value;
  const message = document.getElementById("message").value;

  const submission = { name, email, purpose, message, date: new Date().toLocaleString() };
  submissions.push(submission);
  localStorage.setItem("submissions", JSON.stringify(submissions));
  displaySubmissions();
  form.reset();
}
function displaySubmissions() {

  submissionsDiv.innerHTML = submissions.map((s, index) => `
    <div>
      <h2>Submission #${index + 1}</h2>
      <p>Name: ${s.name}</p>
      <p>Email: ${s.email}</p>
      <p>Purpose: ${s.purpose}</p>
      <p>Message: ${s.message}</p>
      <p>Submitted on: ${s.date}</p>
    </div>
  `).join('');
}

form.addEventListener("submit", saveSubmission);

displaySubmissions();