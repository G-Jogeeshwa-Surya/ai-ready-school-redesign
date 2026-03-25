import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What exactly is AI Ready School?",
    answer: "AI Ready School is a complete AI ecosystem for K-12 schools, providing tools and infrastructure for both students and teachers."
  },
  {
    question: "How is AI Ready School different from other EdTech platforms?",
    answer: "Unlike point solutions, we offer a comprehensive suite (Cypher, Morpheus, Zion, NEO, and Matrix) that integrates seamlessly to transform education."
  },
  {
    question: "Do you offer on-premise deployment for data privacy?",
    answer: "Yes! Matrix provides local AI servers and models running directly on your campus, ensuring absolute data privacy and security."
  },
  {
    question: "What does implementation look like?",
    answer: "Implementation is structured and hands-on, ensuring staff and students are comfortable and fully supported during the rollout."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Everything you need to know about implementing AI in your school.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary-200 bg-primary-50/50' : 'border-slate-200 hover:border-primary-100'}`}
            >
              <button 
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary-700' : 'text-slate-900'}`}>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary-500 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed pt-2 border-t border-primary-100/50">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
