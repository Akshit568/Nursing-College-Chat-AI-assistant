import React from 'react';
import { Message } from '../types';
import { Bot, User, GraduationCap } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex items-start gap-3 ${isBot ? 'justify-start' : 'justify-end'} mb-6`}>
      {isBot && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
      )}
      
      <div className={`max-w-[75%] ${isBot ? 'order-2' : 'order-1'}`}>
        <div className={`rounded-2xl px-5 py-4 shadow-lg ${
          isBot 
            ? 'bg-white border border-gray-100 text-gray-800' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
        }`}>
          <div className="whitespace-pre-line text-sm leading-relaxed">
            {message.text}
          </div>
        </div>
        <div className={`text-xs text-gray-500 mt-2 px-2 ${isBot ? 'text-left' : 'text-right'}`}>
          <span className="bg-gray-100 px-2 py-1 rounded-full">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center order-2 shadow-lg">
          <User className="w-6 h-6 text-white" />
        </div>
      )}
    </div>
  );
};