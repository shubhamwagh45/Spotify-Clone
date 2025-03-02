function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
    const userMessage = userInput.value.trim();
    
    if (userMessage) {
        // Display user message
        const userMsgDiv = document.createElement('div');
        userMsgDiv.className = 'message user-message';
        userMsgDiv.textContent = userMessage;
        chatWindow.appendChild(userMsgDiv);
        
        // Clear input field
        userInput.value = '';

        // Scroll to bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Display bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            const botMsgDiv = document.createElement('div');
            botMsgDiv.className = 'message bot-message';
            botMsgDiv.textContent = botResponse;
            chatWindow.appendChild(botMsgDiv);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    }
}

function getBotResponse(userMessage) {
    // Basic responses for demo purposes
    if (userMessage.toLowerCase().includes('hello')) {
        return 'Hello! How can I assist you with Ayurvedic advice today?';
    } else if (userMessage.toLowerCase().includes('diet')) {
        return 'Ayurveda recommends a balanced diet including fresh fruits, vegetables, whole grains, and plenty of water.';
    } else if (userMessage.toLowerCase().includes('stress')) {
        return 'For stress relief, Ayurveda suggests practices like yoga, meditation, and herbal teas.';
    } else {
        return 'I am not sure about that. Can you please ask something else about Ayurveda?';
    }
}