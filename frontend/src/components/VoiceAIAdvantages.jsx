import React from 'react';

const VoiceAIAdvantages = () => {
  const advantages = [
    {
      emoji: "⚡",
      title: "Instant Response",
      description: "Under 2 seconds vs 4-8 hours"
    },
    {
      emoji: "🌍",
      title: "24/7 Availability",
      description: "Capture international & after-hours customers"
    },
    {
      emoji: "🗣️",
      title: "Multilingual",
      description: "29+ languages automatically (Amy speaks 8+ fluently)"
    },
    {
      emoji: "♾️",
      title: "Unlimited Capacity",
      description: "Handle 100 simultaneous conversations"
    },
    {
      emoji: "💰",
      title: "Cost Efficient",
      description: "$497-997/month vs $8,000-15,000/month"
    },
    {
      emoji: "✨",
      title: "Consistent Quality",
      description: "Never tired, always accurate"
    },
    {
      emoji: "🛍️",
      title: "Shopify Integration",
      description: "Real-time order tracking, inventory, customer data"
    }
  ];

  return (
    <div className="my-12">
      <div 
        className="rounded-2xl p-8 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <h3 className="text-white text-center text-3xl font-bold mb-8">
          🚀 The Voice AI Advantage
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="rounded-xl p-6 transition-transform hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <div className="text-5xl mb-3">{advantage.emoji}</div>
              <h4 className="text-white text-xl font-semibold mb-2">
                {advantage.title}
              </h4>
              <p className="text-white text-opacity-95 text-base leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceAIAdvantages;
