console.log("JavaScript connected!");

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

const today = new Date();
const thisYear = today.getFullYear();

copyright.innerHTML = `© ${thisYear} Saltanat Alieva`;
footer.appendChild(copyright);

const skills = ["Matlab", "Maple", "Adobe Photoshop", "Adobe Illustrator", "JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}