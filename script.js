let jokeIndex = 0;
const jokeButton = document.getElementById('requestJokeButton');

const jokes = [
  ["I got fired from my job at the keybord factory.", "They said I wasn't putting in enough shifts."],
  ["When I was born I was given the choice between great memory, or a gigantic penis.", "But I can't remember which one I chose"], 
  ["Why did they cut off the wi-fi at the farm?", "Because the cows kept downloading mooo-sic."],
  ["Why can't you keep score in Afghanistan?", "Because of the tally-ban."],
  ["What's the difference between a slice of pizza and a dead man?","A slice of pizza can't feed a whole family."]
];
const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";

  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;

  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);

  chatContent.scrollTop = chatContent.scrollHeight;
}

appendBotMessage(
  "Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.",
);

function requestJoke() {
  appendUserMessage();

  if (jokeIndex >= jokes.length) {
    appendBotMessage("Sorry, I'm out of jokes for now!");
    return;
  }

  jokeButton.style.display = "none";

  setTimeout(function () {
    appendBotMessage("Ok, got one.");
  }, 1000);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][0]);
  }, 2000);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    jokeButton.style.display = "inline-block";
  }, 4000);
}

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";

  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";

  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);
}