import React from 'react';

const PhoneAICallout = () => {
  return (
    <div className="my-12">
      <div 
        className="rounded-2xl p-8 border-4 border-white shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        }}
      >
        <div className="text-center">
          <h3 className="text-white text-3xl font-bold mb-4">
            Meet Amy's Sister: Phone AI Agent
          </h3>
          <p className="text-white text-opacity-95 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Amy's "sister" handles phone calls to our California number, providing the same exceptional multilingual support via voice calls for customers who prefer phone over chat.
          </p>
          
          <div 
            className="rounded-xl p-6 max-w-lg mx-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <p className="text-white font-semibold text-lg mb-3">
              🎯 Try Luna - Multilingual Demo
            </p>
            <p className="text-white text-opacity-90 text-base mb-4">
              Speak with our Voice AI in Italian, English, Spanish & more languages
            </p>
            <a 
              href="tel:+15597174103"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 no-underline"
              style={{ textDecoration: 'none' }}
            >
              +1 (559) 717-4103
            </a>
            <p className="text-white text-opacity-85 text-sm mt-3 italic">
              Live demo for Italian Pizzerias - Call now to experience multilingual AI!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAICallout;
