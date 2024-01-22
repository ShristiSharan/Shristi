
const userMessage = [
    /* 0 */["hi", "hey", "hello", "hlo", "hi there", "hey there"],
    /* 1 */["how are you", "how r u", "hw r u", "how are you doing", "how's it going", "how's life"],
    /* 2 */["what are you doing", "what is going on", "what is up", "wud", "what's up", "what's happening", "ok", "ok"],
    /* 3 */["how old are you"],
    /* 4 */["bye", "good bye", "take care"],
    /* 5 */["who are you", "are you human", "human", "are you bot", "are you human or bot", "what are you", "tell me about yourself"],
    /* 6 */["who created you", "creator", "who is your creator", "who made you"],
    /* 7 */["email", "address", "mail"],
    /* 8 */["developer number", "message", "You are bad", "contact developer", "report", "there is bug", "bug", "who's behind you", "contact", "phone", "contact", "info", "whatsapp", "wa", "number", "Who is amaan", "amaan", "amaan mk", "mk", "mohammed", "khalander"],
    /* 9 */["instagram", "username", "link", "user", "insta"],
    /* 10 */["github", "repository", "repo", "git"],
    /* 11 */["your name please", "your name", "name", "may I know your name", "what is your name", "what do you call yourself", "tell me your name"],
    /* 12 */["i love you", "love", "love you", "i like you", "you're awesome", "you're great", "you're cool"],
    /* 13 */["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good", "awesome", "nice", "excellent"],
    /* 14 */["bad", "help", "bored", "tired", "not good", "feeling down", "feeling low", "i am sad", "sad"],
    /* 15 */["What is your purpose?", "Why were you created?", "What can you do?", "Tell me about your capabilities", "club", "What's your main function?"],
    /* 16 */["What's the weather like today?", "Tell me the weather forecast", "Weather today"],
    /* 17 */["How does your language model work?", "created", "language", "Explain your AI technology", "Tell me about your architecture", "how you work", "send your code"],
    /* 18 */["What's the time now?", "What's the current time?", "Tell me the time", "time"],
      /* 19 */[ "news", "plans", "planned", "future"],
          /* 20 */["work", " Education", "school"],
  ];
  
  const botReply = [
    /* 0 */["Hello! 😊", "Hi! 👋", "Hey! 👍", "Hi! 👋"],
    /* 1 */["Fine... how are you? 😄", "Pretty well, how are you? 😊", "Fantastic, how are you? 🌟"],
    /* 2 */["Getting better. There? 😄", "Somewhat okay! 😅", "Yeah fine!🏡"],
    /* 3 */["I am always young. 👶"],
    /* 4 */["Goodbye! 👋", "Farewell! 😊", "Please take care! 🌼"],
    /* 5 */["I am just a bot 😄", "I am a bot. What are you? 🤖"],
    /* 6 */["Shristi Sharan is my creator 🙌"],
    /* 7 */["You can contact Shristi:<br> Email: <a href='mailto:shristisharan05@gmail.com'>shristisharan05@gmail.com 📧</a>"],
    /* 8 */["You can contact Shristi:<br> Phone: <a href='tel:7979011828'>7979011828</a> 📱<br> WhatsApp: <a href='https://wa.me/7979011828'>7979011828</a> 💬"],
    /* 9 */["Instagram: <a href='https://www.instagram.com/sharan_shristi/'>@sharan_shristi📷</a>"],
    /* 10 */["GitHub: <a href='https://github.com/ShristiSharan'>@ShristiSharan 🐙</a>"],
    /* 11 */["I am ShrisGPT by Shristi Sharan 😊"],
    /* 12 */["I love you too ❤️", "Me too! 😄", "Thanks! Try giving feedback on Mail: <a href='mailto:shristisharan05@gmail.com'>shristisharan05@gmail.com 📧💬"],
    /* 13 */[
      "I'm glad to hear that you're feeling happy! 😄", "That's great! 😊", "Thanks! Try giving feedback on WhatsApp: <a href='https://wa.me/7979011828'></a> 💬", "Fun is always good! 🎉", "Wonderful! 😄", "Fantastic! 😃", "Cool! 😎", "😊", "Awesome! 🌟", "Excellent! 👏"
    ],
    /* 14 */[
      "I'm really sorry to hear that you're feeling this way. It's important to talk to someone you trust about your feelings. ❤️",
      "You don't have to go through this alone. Reach out to friends, family, or a mental health professional for support. 🤗",
      "I'm here to listen and chat with you, but I'm not a replacement for professional help. Please consider seeking help from a therapist or counselor. 🙏",
      "Remember that it's okay to not be okay sometimes. Your feelings are valid, and there are people who care about you. 💕",
      "If you'd like, we can chat about your feelings and experiences. Sharing can sometimes help lighten the burden. 📢",
      "Depression can be a tough journey, but there is hope and help available. You're not alone in this. 🌟",
      "Is there anything specific you'd like to talk about or any questions you have? 😊",
      "I'm here to provide a listening ear. Feel free to share as much or as little as you're comfortable with. 🤗",
      "You got a lot of potential, You are more stronger than you you! Just be Stronger than your excuses in mind. ",
    ],
    /* 15 */["My purpose is to entertain you 🎉."],
    /* 16 */["I'm sorry, I cannot provide real-time weather information. You can check a weather website or app for the latest updates. ☀️"],
    /* 17 */["That's a secret only Shristi knows! 🤫"],
    /* 18 */["I don't have access to real-time data, including the current time. You can check the time on your device or ask a voice assistant like Siri or Google Assistant. ⌚"],
   /* 19 */[
      " Focusing on building End to end development🎉",
      " First Job after B.Tech then further Studies🕹️",
      " Currently growing and expanding my knowledge🚀"
    ],
  /* 20 */[
      "I'm working on Myself,Shris is 3rd year engineering student🏫🤝",
      "Student at IIIT Ahmedabad-Electrical & Computer Science engineering 📚🤝",
      "I'm adult now! passed my school, about to be engineer now!🌟🤝",
    ],
  ];
  
  
  // Ensure the number of responses in botReply matches the number of message groups in userMessage
  if (botReply.length !== userMessage.length) {
    console.log("The number of message groups in botReply must match the number of message groups in userMessage.");
    console.log(userMessage.length)
    console.log(botReply.length);
  }
  
  const alternative = [
    "Can you ask something else. ❓",
    "Hey, I'm listening... 👂",
    "I didn't quite catch that. Could you please rephrase your question? 🤔",
    "I'm not sure I understand. Can you provide more context or ask a different question? 🧐",
    "Hmm, that's a bit confusing. Could you try asking in a different way? 🤨",
    "Could you try asking in a different way? 🤨",
    "I'm here to help, but I need a clearer question to provide a meaningful answer. 🤷‍♂️",
    "It seems like we're on different wavelengths. Please try asking something else. 📡",
    "I apologize, but I couldn't grasp the meaning of your input. Please rephrase your question. 🙁",
    "You can contact Shristi:<br> Phone: <a href='tel:7979011828'>7979011828 📱</a><br> WhatsApp: <a href='https://wa.me/7979011828'>7979011828 💬"
  ];
  let lastUserDiv;
  
  function sendMessage() {
    const inputField = document.getElementById("user-input");
    const input = inputField.value.trim();
    if (input) {
      output(input);
      inputField.value = "";
    }
  }
  
  //Calculation 
  function findResponse(input) {
  
    //checks direct messages
    let text = cleanInput(input);
    for (const messageGroup of userMessage) {
      const matchingMessage = messageGroup.find(message => text.includes(message.toLowerCase()));
      if (matchingMessage) {
        return getRandomResponseFromCategory(userMessage.indexOf(messageGroup));
      }
    }
    const directMatch = findDirectMatch(text);
    if (directMatch) {
      return directMatch;
    }
  
    //check similarity
    const SIMILARITY_THRESHOLD = 0.6;
    for (let i = 0; i < userMessage.length; i++) {
      const messageGroup = userMessage[i];
      for (const message of messageGroup) {
        const similarityScore = calculateSimilarity(text, message);
        if (similarityScore >= SIMILARITY_THRESHOLD) {
          return getRandomResponseFromCategory(i);
        }
      }
    }
  
    //check each word
    const words = text.split(' ');
    for (const word of words) {
      if (isCommonWord(word)) {
        continue;
      }
      const categoryIndex = findCategoryIndex(word);
      if (categoryIndex !== -1) {
        return getRandomResponseFromCategory(categoryIndex);
      }
    }
  
    return getRandomAlternativeResponse();
  }
  
  function calculateSimilarity(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const short = len1 < len2 ? len1 : len2;
    const long = len1 > len2 ? len1 : len2;
    let matchCount = 0;
  
    for (let i = 0; i < short; i++) {
      if (str1[i] === str2[i]) {
        matchCount++;
      }
    }
    const similarity = matchCount / long;
    return similarity;
  }
  
  function cleanInput(input) {
    return input
      .toLowerCase()
      .replace(/[^\w\s'"]/gi, "")
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  }
  
  function findDirectMatch(text) {
    for (const messageGroup of userMessage) {
      const matchingMessage = messageGroup.find(message => text.includes(message.toLowerCase()));
      if (matchingMessage) {
        return getRandomResponseFromCategory(userMessage.indexOf(messageGroup));
      }
    }
    return null;
  }
  
  function isCommonWord(word) {
    const commonWords = [
      'why', 'who', 'how', 'what', 'please', 'a', 'an', 'the', 'is', 'are', 'am', 'I',
      'you', 'he', 'she', 'we', 'they', 'it', 'and', 'but', 'or', 'not', 'in', 'on',
      'your', 'my', 'their', 'his', 'her', 'its', 'our', 'with', 'without', 'at', 'by',
    ];
    return commonWords.includes(word.toLowerCase());
  }
  
  function findCategoryIndex(word) {
    return botReply.findIndex(category => category.includes(word));
  }
  
  function getRandomResponseFromCategory(categoryIndex) {
    const responses = botReply[categoryIndex];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  function getRandomAlternativeResponse() {
    return alternative[Math.floor(Math.random() * alternative.length)];
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("user-input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        const input = inputField.value.trim();
        if (input) {
          output(input);
          inputField.value = "";
        }
      }
    });
  });
  
  const usnexp = /\b4AI\d{2}AI\d{3}\b/i;
  
  
  const inputField = document.getElementById("user-input");
  const quickMessageButtons = document.querySelectorAll(".quickmessage");
  const mainDiv = document.getElementById("message-section");
  const botDiv = document.createElement("div");
  
  function sendBotMessage(message, typingText = "Typing...") {
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response" class="typing-animation">${typingText}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    inputField.disabled = true;
    quickMessageButtons.forEach(button => {
      button.disabled = true;
    });
  
    setTimeout(() => {
      const botResponse = botDiv.querySelector("#bot-response");
      botResponse.classList.remove("typing-animation");
      botDiv.innerHTML = `<span id="bot-response">${message}</span>`;
      scroll.scrollTop = scroll.scrollHeight;
      inputField.disabled = false;
      quickMessageButtons.forEach(button => {
        button.disabled = false;
      });
  
      inputField.focus();
    }, 2000);
  }
  
  function userMessageSend(input) {
    // Create a new user message div
    const newUserDiv = document.createElement("div");
    newUserDiv.id = "user";
    newUserDiv.classList.add("message", "typing-animation");
    newUserDiv.style.animationDuration = "1s";
    newUserDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(newUserDiv);
  
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
  
    // Removed "typing-animation" class after 500ms
    setTimeout(() => {
      newUserDiv.classList.remove("typing-animation");
    }, 500);
  }
  
  function userMessageWait() {
    return new Promise((resolve) => {
      const inputField = document.getElementById("user-input");
      let userResponse = "";
  
      function handleUserResponse(e) {
        if (e.code === "Enter" || e.target.classList.contains("sendmessage")) {
          const trimmedResponse = userResponse.trim();
          resolve(trimmedResponse);
        } else {
          userResponse = inputField.value;
        }
      }
  
      function handleInputBlur() {
        resolve(userResponse.trim());
      }
  
      inputField.addEventListener("keydown", handleUserResponse);
      inputField.addEventListener("input", handleUserResponse);
      inputField.addEventListener("blur", handleInputBlur);
    });
  }
  
  
  function addChat(input, product) {
    // Create a new user message div
    const newUserDiv = document.createElement("div");
    newUserDiv.id = "user";
    newUserDiv.classList.add("message", "typing-animation");
    newUserDiv.style.animationDuration = "0.5s";
    newUserDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(newUserDiv);
  
    const botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message", "typing-animation");
    botDiv.style.animationDuration = "2s";
    botDiv.innerHTML = `<span id="bot-response">Typing...</span>`;
    mainDiv.appendChild(botDiv);
  
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    inputField.disabled = true;
    quickMessageButtons.forEach(button => {
      button.disabled = true;
    });
  
    newUserDiv.classList.remove("typing-animation");
    setTimeout(() => {
      botDiv.classList.remove("typing-animation");
      botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
      scroll.scrollTop = scroll.scrollHeight;
      inputField.disabled = false;
      quickMessageButtons.forEach(button => {
        button.disabled = false;
      });
      inputField.focus();
    }, 2000);
  }