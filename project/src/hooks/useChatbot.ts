import { useState, useCallback } from 'react';
import { Message, ChatState, ConversationStep } from '../types';
import { conversationData } from '../data/conversationData';

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: conversationData.initial.question,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const [chatState, setChatState] = useState<ChatState>({
    currentStep: 'initial',
    userResponses: {},
    isCompleted: false
  });

  const [isTyping, setIsTyping] = useState(false);

  // Strategic positive response detection with comprehensive patterns
  const isPositiveResponse = (response: string): boolean => {
    const cleanResponse = response.toLowerCase().trim();
    
    // Exact positive matches (Hindi + English)
    const exactPositives = [
      // Hindi variations
      'haan', 'han', 'haa', 'ha', 'ji haan', 'ji han', 'bilkul', 'zaroor', 'accha',
      'theek hai', 'sahi hai', 'batao', 'bataiye', 'sunao', 'sunaiye',
      // English variations
      'yes', 'y', 'yeah', 'yep', 'yup', 'sure', 'okay', 'ok', 'alright', 'right',
      'absolutely', 'definitely', 'of course', 'certainly', 'indeed', 'correct',
      // Action words
      'tell me', 'tell me more', 'more', 'continue', 'go ahead', 'proceed', 'next',
      'show me', 'explain', 'describe', 'detail', 'elaborate',
      // Interest indicators
      'interested', 'want to know', 'would like', 'please', 'kya hai', 'what is',
      'how', 'when', 'where', 'why'
    ];

    // Check exact matches
    if (exactPositives.includes(cleanResponse)) {
      return true;
    }

    // Phrase-based positive patterns
    const positivePatterns = [
      'tell me more', 'want to know', 'interested in', 'please tell', 'go ahead',
      'continue with', 'yes please', 'sure continue', 'haan batao', 'yes tell me',
      'i want', 'i would like', 'can you tell', 'let me know', 'i need',
      'sounds good', 'looks good', 'seems good', 'that\'s good'
    ];

    return positivePatterns.some(pattern => cleanResponse.includes(pattern));
  };

  // Strategic negative response detection
  const isNegativeResponse = (response: string): boolean => {
    const cleanResponse = response.toLowerCase().trim();
    
    // Exact negative matches
    const exactNegatives = [
      // Hindi variations
      'nahi', 'nhi', 'na', 'nahin', 'bilkul nahi', 'nahi chahiye',
      // English variations
      'no', 'nope', 'nah', 'not really', 'not interested', 'not now',
      // Ending words
      'stop', 'enough', 'sufficient', 'done', 'finish', 'end', 'quit', 'exit',
      'bye', 'goodbye', 'thanks but no', 'no thanks'
    ];

    if (exactNegatives.includes(cleanResponse)) {
      return true;
    }

    // Negative phrase patterns
    const negativePatterns = [
      'no thank', 'not interested', 'that\'s enough', 'thanks but no',
      'nahi chahiye', 'enough information', 'stop here', 'bas karo',
      'not looking', 'don\'t want', 'not suitable', 'not for me'
    ];

    return negativePatterns.some(pattern => cleanResponse.includes(pattern));
  };

  // Advanced query analysis with comprehensive nursing college context
  const analyzeSpecificQuery = (response: string): {
    type: 'admission_query' | 'eligibility_query' | 'fee_query' | 'location_query' | 
          'scholarship_query' | 'seats_query' | 'facilities_query' | 'recognition_query' |
          'clinical_query' | 'placement_query' | 'general';
    response: string;
  } => {
    const lowerResponse = response.toLowerCase();
    
    // Admission and eligibility queries with score analysis
    if (lowerResponse.includes('score') || lowerResponse.includes('percent') || 
        lowerResponse.includes('%') || lowerResponse.includes('marks') || 
        lowerResponse.includes('grade') || lowerResponse.includes('cgpa') ||
        lowerResponse.includes('eligible') || lowerResponse.includes('qualify') ||
        lowerResponse.includes('admission') || lowerResponse.includes('apply') ||
        lowerResponse.includes('can i get') || lowerResponse.includes('will i get')) {
      
      const scoreMatch = lowerResponse.match(/(\d+)\s*(?:percent|%|marks)/);
      const score = scoreMatch ? parseInt(scoreMatch[1]) : null;
      
      let responseText = '';
      if (score && score >= 70) {
        responseText = `Excellent! A ${score}% score is outstanding and well above our requirements. `;
      } else if (score && score >= 50) {
        responseText = `Great! A ${score}% score meets our admission criteria. `;
      } else if (score && score >= 45) {
        responseText = `Good! A ${score}% score meets our minimum requirement. `;
      } else if (score && score < 45) {
        responseText = `With a ${score}% score, you're slightly below our minimum requirement of 45%. However, `;
      }
      
      responseText += `here are the complete admission requirements for our B.Sc Nursing program:

📋 **Admission Eligibility:**
• **Biology in 12th grade** (Absolutely mandatory)
• **Minimum 45% marks** in 12th grade
• **PNT Exam** must be cleared
• **Age:** 17 to 35 years
• **Subjects:** Physics, Chemistry, Biology, English

🎯 **Your Next Steps:**
1. Ensure you have Biology in 12th grade
2. Prepare for PNT (Pre-Nursing Test)
3. Gather required documents
4. Apply during admission window (March-June)

${score && score >= 45 ? '✅ You appear to meet our basic academic requirements!' : '⚠️ You may need to explore alternative pathways or improvement options.'}

Would you like detailed guidance on the admission process or information about our program features?`;

      return { type: 'admission_query', response: responseText };
    }

    // Fee and payment queries
    if (lowerResponse.includes('fee') || lowerResponse.includes('cost') || 
        lowerResponse.includes('price') || lowerResponse.includes('money') ||
        lowerResponse.includes('payment') || lowerResponse.includes('installment') ||
        lowerResponse.includes('expensive') || lowerResponse.includes('affordable')) {
      return { type: 'fee_query', response: conversationData.fee_structure.question };
    }

    // Location and accessibility queries
    if (lowerResponse.includes('location') || lowerResponse.includes('address') || 
        lowerResponse.includes('where') || lowerResponse.includes('delhi') ||
        lowerResponse.includes('transport') || lowerResponse.includes('bus') ||
        lowerResponse.includes('metro') || lowerResponse.includes('connectivity')) {
      return { type: 'location_query', response: conversationData.location.question };
    }

    // Scholarship and financial aid queries
    if (lowerResponse.includes('scholarship') || lowerResponse.includes('financial aid') ||
        lowerResponse.includes('government scheme') || lowerResponse.includes('discount') ||
        lowerResponse.includes('concession') || lowerResponse.includes('help') ||
        lowerResponse.includes('support') || lowerResponse.includes('assistance')) {
      return { type: 'scholarship_query', response: conversationData.scholarships.question };
    }

    // Seats and availability queries
    if (lowerResponse.includes('seats') || lowerResponse.includes('vacancy') ||
        lowerResponse.includes('available') || lowerResponse.includes('capacity') ||
        lowerResponse.includes('intake') || lowerResponse.includes('admission open')) {
      return { type: 'seats_query', response: conversationData.total_seats.question };
    }

    // Facilities and infrastructure queries
    if (lowerResponse.includes('hostel') || lowerResponse.includes('facilities') ||
        lowerResponse.includes('training') || lowerResponse.includes('hospital') ||
        lowerResponse.includes('clinical') || lowerResponse.includes('lab') ||
        lowerResponse.includes('equipment') || lowerResponse.includes('infrastructure')) {
      return { type: 'facilities_query', response: conversationData.hostel_facilities.question };
    }

    // Recognition and accreditation queries
    if (lowerResponse.includes('recognition') || lowerResponse.includes('accredited') ||
        lowerResponse.includes('approved') || lowerResponse.includes('inc') ||
        lowerResponse.includes('council') || lowerResponse.includes('valid') ||
        lowerResponse.includes('degree') || lowerResponse.includes('certificate')) {
      return { type: 'recognition_query', response: conversationData.recognition.question };
    }

    // Clinical training queries
    if (lowerResponse.includes('clinical') || lowerResponse.includes('practical') ||
        lowerResponse.includes('hospital training') || lowerResponse.includes('hands-on') ||
        lowerResponse.includes('experience') || lowerResponse.includes('patient')) {
      return { type: 'clinical_query', response: conversationData.clinical_training.question };
    }

    // Placement and career queries
    if (lowerResponse.includes('placement') || lowerResponse.includes('job') ||
        lowerResponse.includes('career') || lowerResponse.includes('opportunity') ||
        lowerResponse.includes('salary') || lowerResponse.includes('future')) {
      const placementResponse = `🚀 **Career Opportunities & Placement Support:**

💼 **Job Opportunities:**
• Government hospitals and healthcare centers
• Private hospitals and nursing homes
• Community health centers
• Corporate healthcare organizations
• International nursing opportunities
• Teaching positions in nursing colleges

📈 **Salary Expectations:**
• Fresher: ₹15,000 - ₹25,000 per month
• Experienced (2-5 years): ₹25,000 - ₹40,000 per month
• Specialized roles: ₹40,000+ per month
• Government positions: As per pay scale + benefits

🎯 **Our Placement Support:**
• 100% placement assistance
• Industry connections and networking
• Interview preparation and soft skills training
• Resume building and career guidance
• Alumni network support

Would you like to know more about our program structure or admission process?`;
      
      return { type: 'placement_query', response: placementResponse };
    }

    return { type: 'general', response: '' };
  };

  const addMessage = useCallback((text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const simulateTyping = useCallback((callback: () => void, delay: number = 1800) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  }, []);

  const handleUserResponse = useCallback((response: string) => {
    addMessage(response, 'user');

    // Priority 1: Handle specific queries with immediate contextual responses
    const specificQuery = analyzeSpecificQuery(response);
    if (specificQuery.type !== 'general') {
      simulateTyping(() => {
        addMessage(specificQuery.response, 'bot');
      });
      return;
    }

    // Priority 2: Handle explicit negative responses with professional closure
    if (isNegativeResponse(response)) {
      simulateTyping(() => {
        addMessage("I completely understand! Thank you for your time. If you ever need information about nursing admissions or have any questions about our program in the future, I'll be here to assist you.\n\n🌟 **Remember:** Our admission window is open from March to June, so feel free to reach out anytime.\n\nWishing you all the best for your career journey! 🙏", 'bot');
        setChatState(prev => ({ ...prev, isCompleted: true }));
      });
      return;
    }

    // Priority 3: Handle positive responses and conversation flow
    if (isPositiveResponse(response) || chatState.currentStep === 'eligibility_check') {
      const currentStepData = conversationData[chatState.currentStep];
      let nextStep = currentStepData.nextStep as ConversationStep;
      let nextMessage = '';

      // Special handling for eligibility check with detailed feedback
      if (chatState.currentStep === 'eligibility_check') {
        const hasBiology = response.toLowerCase().includes('biology') || 
                          response.toLowerCase().includes('bio') ||
                          response.toLowerCase().includes('science') ||
                          isPositiveResponse(response);
        
        if (!hasBiology && (isNegativeResponse(response) || 
            response.toLowerCase().includes('nahi') || 
            response.toLowerCase().includes('no'))) {
          simulateTyping(() => {
            addMessage(`I understand that you didn't have Biology in 12th grade. ${conversationData.eligibility_check.biologyRequired}

Unfortunately, Biology is a mandatory requirement as per Indian Nursing Council (INC) guidelines, and without it, admission to B.Sc Nursing is not possible.

🔄 **Alternative Options:**
• Consider other healthcare programs that don't require Biology
• Explore diploma courses in healthcare management
• Look into paramedical courses
• Consider improving qualifications through bridge courses

Thank you for your interest in our nursing program. I hope you find a suitable career path in healthcare! 🌟`, 'bot');
            setChatState(prev => ({ ...prev, isCompleted: true }));
          });
          return;
        }
      }

      // Continue with structured conversation flow
      if (nextStep && nextStep !== 'completed') {
        nextMessage = conversationData[nextStep].question;
        
        simulateTyping(() => {
          addMessage(nextMessage, 'bot');
          setChatState(prev => ({
            ...prev,
            currentStep: nextStep,
            userResponses: { ...prev.userResponses, [chatState.currentStep]: response },
            isCompleted: false
          }));
        });
      } else {
        // End of structured flow - provide comprehensive support options
        nextMessage = `Thank you for your interest in our B.Sc Nursing program! I've provided comprehensive information about our college and admission process.

🎯 **What would you like to explore further?**

📚 **Academic Information:**
• Detailed curriculum and subjects
• Faculty profiles and expertise
• Academic calendar and schedule

💰 **Financial Planning:**
• Detailed fee breakdown
• Scholarship application process
• Payment plans and EMI options

🏥 **Career Preparation:**
• Clinical training details
• Placement statistics and support
• Alumni success stories

📋 **Admission Guidance:**
• Step-by-step admission process
• Document requirements checklist
• Important dates and deadlines

🏠 **Campus Life:**
• Hostel facilities and rules
• Student activities and clubs
• Campus safety and security

Feel free to ask me anything specific! I'm here to ensure you have all the information needed to make an informed decision about your nursing career. 🌟`;
        
        simulateTyping(() => {
          addMessage(nextMessage, 'bot');
          setChatState(prev => ({
            ...prev,
            userResponses: { ...prev.userResponses, [chatState.currentStep]: response },
            isCompleted: false // Keep conversation accessible
          }));
        });
      }
    } else {
      // Handle ambiguous responses with strategic clarification
      simulateTyping(() => {
        addMessage(`I'd be happy to help you with information about our nursing program! To provide you with the most relevant information, could you please:

🎯 **Choose one of these options:**
• Say **'Yes'** or **'Haan'** to continue with our guided information tour
• Say **'No'** or **'Nahi'** if you're not interested right now
• Ask me specific questions like:
  - "What are the admission requirements?"
  - "Tell me about fees and scholarships"
  - "Where is the college located?"
  - "What are the career opportunities?"

💡 **Quick Examples:**
• "I scored 85% in 12th, can I get admission?"
• "What is the fee structure?"
• "Tell me about hostel facilities"

I'm here to provide detailed, accurate information about our nursing program! 🌟`, 'bot');
      });
    }
  }, [chatState.currentStep, addMessage, simulateTyping]);

  const resetChat = useCallback(() => {
    setMessages([
      {
        id: '1',
        text: conversationData.initial.question,
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    setChatState({
      currentStep: 'initial',
      userResponses: {},
      isCompleted: false
    });
  }, []);

  return {
    messages,
    chatState,
    isTyping,
    handleUserResponse,
    resetChat
  };
};