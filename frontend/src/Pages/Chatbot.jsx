import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { steps } from '../Utils/Data';

const SimpleChatbot = () => {
    const [chatbotDisplay, setChatbotDisplay] = useState(false);

    const toggleChatbotDisplay = () => {
        setChatbotDisplay(prevDisplay => !prevDisplay);
    };

    const chatBotComponent = useMemo(() => (
        <ChatBot steps={steps} className='dialog-box absolute bottom-30 right-10' />
    ), [steps]);

    return (
        <div>
            <div className='chatbot w-10 aspect-square rounded-full bg-white text-black text-center absolute bottom-10 right-10 cursor-pointer' onClick={toggleChatbotDisplay}>
                <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>

            {chatbotDisplay && chatBotComponent}
        </div >
    );
};

export default SimpleChatbot;