// Select form elements and output container
var form = document.getElementById("resumesheet");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var educationInput = document.getElementById("education");
var skillInput = document.getElementById("skill");
var experienceInput = document.getElementById("experience");
var outputDiv = document.getElementById("resumeoutput");
// Function to generate resume
function generateResume(event) {
    event.preventDefault(); // Prevent form submission and page reload
    // Clear previous resume content
    outputDiv.innerHTML = "";
    // Create a dynamic resume with user input
    var resumeHTML = "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(nameInput.value, "</p>\n        <p><strong>Email:</strong> ").concat(emailInput.value, "</p>\n        <p><strong>Phone:</strong> ").concat(phoneInput.value, "</p>\n        <h3>Education</h3>\n        <p>").concat(educationInput.value || "Not provided", "</p>\n        <h3>Skills</h3>\n        <p>").concat(skillInput.value || "Not provided", "</p>\n        <h3>Experience</h3>\n        <p>").concat(experienceInput.value || "Not provided", "</p>\n    ");
    // Append resume to the output div
    outputDiv.innerHTML = resumeHTML;
}
// Add an event listener to the form
form.addEventListener("submit", generateResume);
