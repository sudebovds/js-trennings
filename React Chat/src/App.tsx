import React from 'react';
import './assets/__common.scss';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import { chatFeedProps } from './assets/Types';
 
const App = () => {

  return (
    <ChatEngine 
      height = '97.5vh'
      projectID = '63646e9e-a465-47e8-9827-2853679cd13f'
      userName = 'admin'
      userSecret = '615772'
      renderChatFeed = { (chatFeedProps: chatFeedProps) => <ChatFeed {...chatFeedProps} /> }
    />
  )
}

export default App
