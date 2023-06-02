// Get required elements
const messageInput = document.getElementById('message-input');
const chatLog = document.getElementById('chat-log');
const submitBtn = document.getElementById('submit-btn');

// Event listener for submit button
submitBtn.addEventListener('click', sendMessage);

// Event listener for Enter key press
messageInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    sendMessage();
  }
});

// Function to send user message and get response
function sendMessage() {
  const userMessage = messageInput.value;
  appendMessage('user', userMessage);

  // TODO: Process user message and generate a response

  // Clear input field
  messageInput.value = '';
}

// Function to append a message to the chat log
function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatLog.appendChild(messageElement);
}

// Function to send user message and get response
function sendMessage() {
    const userMessage = messageInput.value;
    appendMessage('user', userMessage);
  
    // Process user message and generate response
    const botResponse = generateBotResponse(userMessage);
    appendMessage('bot', botResponse);
  
    // Clear input field
    messageInput.value = '';
  }
  
  // Function to generate bot response
  function generateBotResponse(userMessage) {
    return 'You said: ' + userMessage;
  }
  
  // Function to send user message and get response
function sendMessage() {
    const userMessage = messageInput.value;
    appendMessage('user', userMessage);
  
    // Process user message and generate response
    const botResponse = generateBotResponse(userMessage);
    appendMessage('bot', botResponse);
  
    // Clear input field
    messageInput.value = '';
  }
  
  // Function to generate bot response
  function generateBotResponse(userMessage) {
    // Check if the user's message contains the word "hello"
    if (userMessage.toLowerCase().includes('hello')) {
      // Extract the user's name from the message
      const userName = extractUserName(userMessage);
      if (userName) {
        return 'Hello, ' + userName + '!';
      }
    }
  
    // Default response if the user's message doesn't contain the word "hello" or no name is provided
    return "Hello! Please enter your name after saying 'hello'.";
  }
  
  // Function to extract user name from the message
  function extractUserName(message) {
    // Split the message by space
    const words = message.split(' ');
  
    // Find the word following "hello"
    const nameIndex = words.findIndex((word, index) => {
      return word.toLowerCase() === 'hello' && index + 1 < words.length;
    });
  
    // Return the word following "hello" as the user's name
    if (nameIndex !== -1) {
      return words[nameIndex + 1];
    }
  
    return null;
  }

  // Define a state object to keep track of the conversation flow
const state = {
    greeting: false,
    askingQuestion: false,
  };
  
  // Function to send user message and get response
  function sendMessage() {
    const userMessage = messageInput.value;
    appendMessage('user', userMessage);
  
    // Process user message and generate response
    const botResponse = generateBotResponse(userMessage);
    appendMessage('bot', botResponse);
  
    // Clear input field
    messageInput.value = '';
  }
  
  // Function to generate bot response
  function generateBotResponse(userMessage) {
    // Check if the user's message contains the word "hello"
    if (userMessage.toLowerCase().includes('hello')) {
      state.greeting = true;
      state.askingQuestion = false;
      return 'Hello! How can I assist you today?';
    }
  
    // Check if the bot has greeted the user and is asking a question
    if (state.greeting && state.askingQuestion) {
      state.greeting = false;
      state.askingQuestion = false;
      return 'Great! Thanks for your answer.';
    }
  
    // Check if the bot has greeted the user and is ready to ask a question
    if (state.greeting && !state.askingQuestion) {
      state.askingQuestion = true;
      return 'Could you please provide an answer?';
    }
  
    // Default response if the user's message doesn't contain the word "hello"
    return "Hello! How can I assist you today?";
  }
  