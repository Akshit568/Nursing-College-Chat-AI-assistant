import React, { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatHeader } from './ChatHeader';
import { TypingIndicator } from './TypingIndicator';
import { QuickReplies } from './QuickReplies';
import { useChatbot } from '../hooks/useChatbot';

export const ChatContainer: React.FC = () => {
  const { messages, chatState, isTyping, handleUserResponse, resetChat } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-purple-50">
      <ChatHeader onReset={resetChat} />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>
      
      {(
        <QuickReplies
          currentStep={chatState.currentStep}
          onReply={handleUserResponse}
          disabled={isTyping}
        />
      )}
      
      <ChatInput 
        onSendMessage={handleUserResponse} 
        disabled={isTyping}
      />
    </div>
  );
};