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
    skillsList.append(li);
});