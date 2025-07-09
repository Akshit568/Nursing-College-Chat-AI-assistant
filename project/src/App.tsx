import React, { useState } from 'react';
import { ChatContainer } from './components/ChatContainer';
import { LandingPage } from './components/LandingPage';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="h-screen">
      {showChat ? (
        <ChatContainer />
      ) : (
        <LandingPage onStartChat={() => setShowChat(true)} />
      )}
    </div>
  );
}

export default App;