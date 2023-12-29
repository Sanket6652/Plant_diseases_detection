import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { steps } from '../Utils/Data';

const SimpleChatbot = () => {
    const [chatbotDisplay, setChatbotDisplay] = useState(false);

    return (
        <div>
            <div className='w-10 aspect-square rounded-full bg-white text-black text-center absolute bottom-10 right-10 cursor-pointer' onClick={() => chatbotDisplay ? setChatbotDisplay(false) : setChatbotDisplay(true)}>
                <ion-icon name="chatbubbles-outline" style={{ fontSize: '25px' }}></ion-icon>
            </div>
            {chatbotDisplay && <ChatBot steps={steps} className='absolute bottom-30 right-10' />}
        </div >
    );
};

export default SimpleChatbot;