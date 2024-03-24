window.onload = function() {
    const chat = document.getElementById('chat');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function() {
        const userMessage = messageInput.value;
        appendMessage(chat, userMessage, 'user');

        setTimeout(function() {
            let response = getResponse(userMessage);
            appendMessage(chat, response, 'author');
        }, 1000);

        messageInput.value = '';
    });

    function appendMessage(chat, message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.innerText = message;
        chat.appendChild(messageElement);
    }

    function getResponse(message) {
        message = message.toLowerCase();
        let response = 'I am not sure what you mean. Can you please elaborate?';

        if (message.includes('hello')) {
            response = 'Hello! How can I help you today?';
        } else if (message.includes('thanks') || message.includes('thank you')) {
            response = 'You are welcome!';
        } else if (message.includes('bye') || message.includes('goodbye')) {
            response = 'Goodbye! Have a great day!';
        }

        return response;
    }
};