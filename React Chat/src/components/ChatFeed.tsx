import React from 'react';
import { chatFeedProps } from '../assets/Types';
import RenderMessages from './RenderMessages';

const ChatFeed = (props: chatFeedProps) => {
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    
    console.log(<RenderMessages msgs = { messages } />)

    return (
        <div>
            
        </div>
    );
}

export default ChatFeed;