const API = {
  GetChatbotResponse: async message => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (message === "hi") resolve("Welcome to chatbot!");
        else resolve("echo : " + message);
      }, 2000);
    });
  }
};

export default API;
