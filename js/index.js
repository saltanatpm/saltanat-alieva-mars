console.log("JavaScript connected!");

const messageForm = document.querySelector('form[name = "leave_message"]');

messageForm.addEventListener("submit", function(event){

    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target. usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    const nameLink = document.createElement("a");
    nameLink.href = "mailto:" + usersEmail;
    nameLink.innerText = usersName;

    const messageText = document.createElement("span");
    messageText.innerText = " " + usersMessage;

    newMessage.appendChild(nameLink);
    newMessage.appendChild(messageText);

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
    newMessage.remove();
    
});
    newMessage.appendChild(removeButton);

    messageForm.reset();
});

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

const today = new Date();
const thisYear = today.getFullYear();

copyright.innerHTML = `© ${thisYear} Saltanat Alieva`;
footer.appendChild(copyright);

const skills = ["Matlab", "Maple", "Adobe Photoshop", "Adobe Illustrator", "JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}