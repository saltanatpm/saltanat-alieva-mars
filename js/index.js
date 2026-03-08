console.log("JavaScript connected!");

// Cache DOM elem
const messageForm = document.querySelector('form[name="leave_message"]');
const messageList = document.querySelector("#messages ul");
const footer = document.querySelector("footer");

// Build Message <li>
function buildMessageLi(name, email, message) {
    const li = document.createElement("li");

    const nameLink = document.createElement("a");
    nameLink.href = `mailto:${email}`;
    nameLink.textContent = name;
    const messageText = document.createElement("span");
    messageText.textContent = ` ${message}`;
    const messageText = document.createElement("p");
    messageText.textContent = message;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";

    li.append(nameLink, messageText, removeButton);

    return li;
}

// Form Submit
messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.usersName.value.trim();
    const email = event.target.usersEmail.value.trim();
    const message = event.target.usersMessage.value.trim();
    if (!name || !email || !message) return;

    console.log(name, email, message);  // ✅ Added log

    const newMessage = buildMessageLi(name, email, message);
    messageList.append(newMessage);
    messageForm.reset();
});

// Event Delegation (1 listener)
messageList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});

// Footer Year
const copyright = document.createElement("p");
const thisYear = new Date().getFullYear();
copyright.textContent = `© ${thisYear} Saltanat Alieva`;
footer.append(copyright);

// Skills Section
const skills = ["Matlab","Maple","Adobe Photoshop","Adobe Illustrator","JavaScript","HTML","CSS","GitHub"];
const skillsList = document.querySelector("#skills ul");
skills.forEach(skillItem => {
    const li = document.createElement("li");
    li.textContent = skillItem;
skills.sort().forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.append(li);
});

// Fetch GitHub Repositories
fetch("https://api.github.com/users/saltanatpm/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(repositories) {

    console.log(repositories); // See data in console

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {

      const project = document.createElement("li");

      const link = document.createElement("a");
      link.href = repositories[i].html_url;
      link.innerText = repositories[i].name;
      link.target = "_blank";
      
      project.appendChild(link);
      projectList.appendChild(project);
    }

  })
  .catch(function(error) {
    console.error("Error fetching repositories:", error);
  });

 

.catch(function(error) {
    console.error("Error fetching repositories:", error);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    projectList.innerHTML = "<li>Sorry, unable to load projects right now.</li>";
});

 
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

