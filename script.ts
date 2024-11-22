
import events from "inquirer/lib/utils/events";


// Select form elements and output container
const form = document.getElementById("resumesheet") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const skillInput = document.getElementById("skill") as HTMLTextAreaElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const outputDiv = document.getElementById("resumeoutput") as HTMLDivElement;

// Function to generate resume
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent form submission and page reload

    // Clear previous resume content
    outputDiv.innerHTML = "";

    // Create a dynamic resume with user input
    const resumeHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Phone:</strong> ${phoneInput.value}</p>
        <h3>Education</h3>
        <p>${educationInput.value || "Not provided"}</p>
        <h3>Skills</h3>
        <p>${skillInput.value || "Not provided"}</p>
        <h3>Experience</h3>
        <p>${experienceInput.value || "Not provided"}</p>
    `;

    // Append resume to the output div
    outputDiv.innerHTML = resumeHTML;
}

// Add an event listener to the form
form.addEventListener("submit", generateResume);
