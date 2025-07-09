import React from 'react';
import { ConversationStep } from '../types';

interface QuickRepliesProps {
  currentStep: ConversationStep;
  onReply: (reply: string) => void;
  disabled?: boolean;
}

export const QuickReplies: React.FC<QuickRepliesProps> = ({ currentStep, onReply, disabled = false }) => {
  const getQuickReplies = (step: ConversationStep): string[] => {
    switch (step) {
      case 'initial':
        return ['Haan', 'Yes, tell me more', 'What is B.Sc Nursing?', 'Nahi'];
      case 'eligibility_check':
        return ['Haan, Biology thi', 'Yes, I studied Biology', 'Nahi, Biology nahi thi', 'What if no Biology?'];
      case 'program_details':
        return ['Tell me about fees', 'Yes, continue', 'What about placements?', 'Nahi'];
      case 'fee_structure':
        return ['Tell me about scholarships', 'Yes, continue', 'Is EMI available?', 'Nahi'];
      case 'hostel_facilities':
        return ['Where is the college?', 'Yes, continue', 'What about safety?', 'Nahi'];
      case 'location':
        return ['Is it INC recognized?', 'Yes, continue', 'Transport facilities?', 'Nahi'];
      case 'recognition':
        return ['Clinical training details', 'Yes, continue', 'Job opportunities?', 'Nahi'];
      case 'clinical_training':
        return ['Scholarship options', 'Yes, continue', 'Hospital partnerships?', 'Nahi'];
      case 'scholarships':
        return ['How many seats?', 'Yes, continue', 'Application process?', 'Nahi'];
      case 'total_seats':
        return ['Admission requirements', 'Yes, continue', 'When to apply?', 'Nahi'];
      case 'admission_eligibility':
        return ['Fee details', 'Admission process', 'Scholarship help', 'Placement info'];
      case 'completed':
        return ['Admission guidance', 'Fee breakdown', 'Scholarship details', 'Career opportunities'];
      default:
        return ['Haan', 'Yes', 'Tell me more', 'Nahi'];
    }
  };

  const quickReplies = getQuickReplies(currentStep);

  if (quickReplies.length === 0 || disabled) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
      <div className="w-full mb-2">
        <p className="text-xs text-gray-600 font-medium">💡 Quick Replies:</p>
      </div>
      {quickReplies.map((reply, index) => (
        <button
          key={index}
          onClick={() => onReply(reply)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};