import React from 'react';
import { GraduationCap } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3 mb-6">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
        <GraduationCap className="w-6 h-6 text-white" />
      </div>
      
      <div className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 mr-2">LiaPlus AI is typing</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};