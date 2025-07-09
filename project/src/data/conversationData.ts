export const conversationData = {
  initial: {
    question: "Hello! I'm your LiaPlus AI assistant for Nursing College Delhi. I'm here to guide you through our B.Sc Nursing program admission process. Are you interested in learning about our nursing program?",
    nextStep: 'eligibility_check'
  },
  eligibility_check: {
    question: "Excellent! Let me help you determine your eligibility. Did you study Biology as a subject in your 12th grade? This is a mandatory requirement for B.Sc Nursing admission.",
    nextStep: 'program_details',
    biologyRequired: "Biology is mandatory for admission to B.Sc Nursing as per Indian Nursing Council (INC) guidelines."
  },
  program_details: {
    question: "Perfect! Our B.Sc Nursing Program is a comprehensive 4-year full-time degree program that prepares you for a rewarding career in healthcare. Here's what makes our program special:\n\n🎓 **Program Highlights:**\n• INC (Indian Nursing Council) recognized degree\n• 4-year comprehensive curriculum\n• Theory + Practical training combination\n• Clinical exposure from 2nd year onwards\n• 100% placement assistance\n• Modern simulation labs and equipment\n\nWould you like to know about our fee structure and payment options?",
    nextStep: 'fee_structure'
  },
  fee_structure: {
    question: "Here's our transparent and affordable fee structure:\n\n💰 **Annual Fee Breakdown:**\n• Tuition Fee: ₹60,000\n• Bus Transportation: ₹10,000\n• **Total Annual Fee: ₹70,000**\n\n📋 **Flexible Payment Options (3 Installments):**\n• 1st Installment: ₹30,000 (at admission)\n• 2nd Installment: ₹20,000 (after 1st semester)\n• 3rd Installment: ₹20,000 (after 2nd semester)\n\n💡 **Additional Benefits:**\n• No hidden charges or extra fees\n• Scholarship opportunities available (₹18k-₹48k)\n• Easy EMI options for financial flexibility\n• Fee protection against inflation during course duration\n\nWould you like to know about our hostel facilities and training infrastructure?",
    nextStep: 'hostel_facilities'
  },
  hostel_facilities: {
    question: "Our world-class facilities ensure your comfort and comprehensive learning experience:\n\n🏠 **Hostel Facilities:**\n• Separate hostels for boys and girls\n• 24×7 water and electricity supply\n• CCTV surveillance for complete security\n• Experienced wardens available round-the-clock\n• Wi-Fi connectivity throughout campus\n• Nutritious mess facilities with varied menu\n• Recreation rooms and study areas\n\n🏥 **Training Infrastructure:**\n• State-of-the-art simulation labs\n• Modern medical equipment for hands-on practice\n• Hospital training with real patient interaction\n• Comprehensive clinical skill development\n• Digital learning resources and e-library\n• Regular workshops by healthcare professionals\n\nWould you like to know about our strategic location in Delhi?",
    nextStep: 'location'
  },
  location: {
    question: "Our college is strategically located in **Delhi**, offering numerous advantages:\n\n📍 **Location Benefits:**\n• Prime location in the national capital\n• Excellent connectivity via metro, bus, and railways\n• Close proximity to major hospitals for clinical training\n• Access to healthcare industry networking opportunities\n• Rich cultural and educational environment\n• Better job prospects in Delhi NCR region\n\n🚌 **Transportation:**\n• College bus service covering major routes\n• Safe and reliable transportation for students\n• Affordable bus fee included in overall cost structure\n\nWould you like to know about our official recognition and accreditation?",
    nextStep: 'recognition'
  },
  recognition: {
    question: "Our college maintains the highest standards of nursing education:\n\n🏆 **Official Recognition & Accreditation:**\n• **Indian Nursing Council (INC), Delhi** - Fully recognized\n• **Delhi Nursing Council** - Approved program\n• **University Affiliation** - Degree awarded by recognized university\n• **NAAC Accredited** - Quality assurance certification\n\n✅ **What This Means for You:**\n• Your degree is valid across India and internationally\n• Eligible for government nursing jobs\n• Can pursue higher studies (M.Sc Nursing, etc.)\n• Professional registration as Registered Nurse (RN)\n• Career opportunities in hospitals, clinics, and healthcare organizations\n\nWould you like to know about our clinical training partnerships?",
    nextStep: 'clinical_training'
  },
  clinical_training: {
    question: "We provide extensive clinical training at prestigious healthcare institutions:\n\n🏥 **Clinical Training Partners:**\n• **District Hospital, Backundpur** - General medicine and surgery\n• **Community Health Centers** - Primary healthcare exposure\n• **Regional Hospital, Chartha** - Specialized departments\n• **Ranchi Neurosurgery and Allied Science Hospital** - Advanced procedures\n• **Government and Private Hospitals** - Diverse clinical experience\n\n🎯 **Clinical Training Benefits:**\n• Hands-on experience with real patients\n• Exposure to various medical specialties\n• Mentorship by experienced nursing professionals\n• Development of critical thinking and decision-making skills\n• Preparation for professional nursing practice\n• Industry connections and networking opportunities\n\nWould you like to know about available scholarship opportunities?",
    nextStep: 'scholarships'
  },
  scholarships: {
    question: "We offer multiple scholarship opportunities to support deserving students:\n\n💰 **Scholarship Programs:**\n\n🎓 **Government Post-Matric Scholarship:**\n• Amount: ₹18,000 - ₹23,000 annually\n• For SC/ST/OBC students\n• Direct benefit transfer to student accounts\n\n🏭 **Labour Ministry Scholarships:**\n• Amount: ₹40,000 - ₹48,000 annually\n• For children of registered laborers\n• Covers significant portion of tuition fees\n\n🌟 **Merit-Based Scholarships:**\n• For students with exceptional academic performance\n• Up to 25% fee reduction\n• Renewable based on academic progress\n\n📋 **How to Apply:**\n• Submit required documents during admission\n• Our admission team assists with application process\n• Scholarships processed within 30 days of admission\n\nWould you like to know about the total seats available in our program?",
    nextStep: 'total_seats'
  },
  total_seats: {
    question: "Here's important information about seat availability:\n\n🎯 **Seat Information:**\n• **Total Seats Available: 60**\n• Limited intake ensures quality education\n• Small batch sizes for personalized attention\n• Better faculty-to-student ratio\n• Enhanced learning experience\n\n⏰ **Admission Timeline:**\n• Applications open: March-June\n• Entrance exam (PNT): Usually in July\n• Merit list declaration: August\n• Admission process: August-September\n• Classes commence: September\n\n🚨 **Important Note:**\nDue to limited seats and high demand, we recommend applying early to secure your admission. Seats are filled on a first-come, first-served basis after meeting eligibility criteria.\n\nWould you like to know the complete admission eligibility criteria?",
    nextStep: 'admission_eligibility'
  },
  admission_eligibility: {
    question: "Here are the complete admission requirements for our B.Sc Nursing program:\n\n📋 **Eligibility Criteria:**\n\n✅ **Academic Requirements:**\n• **12th grade with Biology** (Mandatory)\n• **Minimum 45% marks** in 12th grade\n• **Physics, Chemistry, Biology** as core subjects\n• **English** as a compulsory subject\n\n✅ **Entrance Exam:**\n• **PNT (Pre-Nursing Test)** - Must be cleared\n• Conducted by respective state nursing councils\n• Covers Biology, Chemistry, Physics, and General Knowledge\n\n✅ **Age Criteria:**\n• **Minimum age: 17 years**\n• **Maximum age: 35 years**\n• Age calculated as on December 31st of admission year\n\n✅ **Additional Requirements:**\n• Medical fitness certificate\n• Character certificate from previous institution\n• Migration certificate (if applicable)\n• Caste certificate (for reservation benefits)\n\n🎯 **Next Steps:**\nIf you meet these criteria, I can guide you through the application process, document preparation, and admission procedures.\n\nDo you have any specific questions about admissions, fees, facilities, or our nursing program?",
    nextStep: 'completed'
  }
};