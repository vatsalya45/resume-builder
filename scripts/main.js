// Variables to store resume data
let experiences = [];
let skills = [];

// Load the photo and display it
function loadPhoto(event) {
    const photoOutput = document.getElementById("resume-output");
    const reader = new FileReader();
    
    reader.onload = function() {
        const photoHTML = `<img src="${reader.result}" alt="Profile Photo">`;
        photoOutput.innerHTML = photoHTML;
    }
    
    reader.readAsDataURL(event.target.files[0]);
}

function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const linkedin = document.getElementById("linkedin").value;
    const summary = document.getElementById("summary").value;

    const resumeOutput = document.getElementById("resume-output");

    // Basic Template for Resume
    const resumeHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <h3>Skills</h3>
        <div id="skills-output">${getSkillsHTML()}</div>
        <h3>Professional Experience</h3>
        <div id="experience-output">${getExperienceHTML()}</div>
    `;

    resumeOutput.innerHTML = resumeHTML; // Replace existing output
}

// Function to add skill
function addSkill() {
    const skill = document.getElementById("skill").value;

    // Push the skill to the array
    skills.push(skill);

    // Clear the form after adding the skill
    document.getElementById("skills-form").reset();

    // Update the skills output
    updateSkillsOutput();
}

// Function to update the skills output
function updateSkillsOutput() {
    const skillsOutput = document.getElementById("skills-output");
    skillsOutput.innerHTML = getSkillsHTML();
}

// Function to get formatted skills HTML
function getSkillsHTML() {
    return skills.map(skill => `
        <div class="skill-item">${skill}</div>
    `).join('');
}

// Function to add experience
function addExperience() {
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const location = document.getElementById("location").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const responsibilities = document.getElementById("responsibilities").value;

    // Create experience object and push it to the array
    const experience = {
        jobTitle,
        company,
        location,
        startDate,
        endDate,
        responsibilities
    };
    experiences.push(experience);

    // Clear the form after adding experience
    document.getElementById("experience-form").reset();

    // Update the resume output
    updateExperienceOutput();
}

// Function to update the experience output
function updateExperienceOutput() {
    const experienceOutput = document.getElementById("experience-output");
    experienceOutput.innerHTML = getExperienceHTML();
}

// Function to get formatted experience HTML
function getExperienceHTML() {
    return experiences.map(exp => `
        <div class="experience-item">
            <h4>${
