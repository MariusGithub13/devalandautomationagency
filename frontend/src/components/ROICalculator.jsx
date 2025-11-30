import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calculator, TrendingUp, DollarSign, Phone, MessageSquare, Clock } from 'lucide-react';
import { companyData } from '../data/mock';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    chatbotType: 'all-in-one',
    businessSize: 'medium',
    supportAgents: 3,
    avgSalary: 45000,
    monthlyConversations: 1000,
    avgHandleTime: 12,
    missedLeadsPerMonth: 50
  });

  const [showResults, setShowResults] = useState(false);

  // Chat widget configurations with realistic ROI multipliers
  const chatbotConfigs = {
    'all-in-one': {
      name: 'All-In-One Chat Widget',
      automationRate: 82,
      setupCost: 2997,
      monthlyCost: 597,
      responseTimeImprovement: 0.95, // 95% faster
      leadConversionBoost: 0.38, // 38% more leads converted
      customerSatisfactionBoost: 0.42, // 42% improvement
      revenueMultiplier: 1.35 // 35% revenue increase from better engagement
    },
    'voice-ai': {
      name: 'Voice AI Chat Widget',
      automationRate: 78,
      setupCost: 1997,
      monthlyCost: 397,
      responseTimeImprovement: 0.88,
      leadConversionBoost: 0.32,
      customerSatisfactionBoost: 0.45,
      revenueMultiplier: 1.28
    },
    'live-chat': {
      name: 'Live Chat Widget',
      automationRate: 65,
      setupCost: 997,
      monthlyCost: 197,
      responseTimeImprovement: 0.75,
      leadConversionBoost: 0.25,
      customerSatisfactionBoost: 0.35,
      revenueMultiplier: 1.18
    },
    'whatsapp': {
      name: 'WhatsApp Chat Widget',
      automationRate: 70,
      setupCost: 997,
      monthlyCost: 147,
      responseTimeImprovement: 0.80,
      leadConversionBoost: 0.28,
      customerSatisfactionBoost: 0.38,
      revenueMultiplier: 1.22
    }
  };

  const businessSizeDefaults = {
    'small': { agents: 1, salary: 35000, conversations: 300, leads: 20 },
    'medium': { agents: 3, salary: 45000, conversations: 1000, leads: 50 },
    'large': { agents: 8, salary: 55000, conversations: 3000, leads: 150 },
    'enterprise': { agents: 20, salary: 65000, conversations: 10000, leads: 500 }
  };

  const handleInputChange = (field, value) => {
    if (field === 'businessSize') {
      const defaults = businessSizeDefaults[value];
      setInputs({
        ...inputs,
        businessSize: value,
        supportAgents: defaults.agents,
        avgSalary: defaults.salary,
        monthlyConversations: defaults.conversations,
        missedLeadsPerMonth: defaults.leads
      });
    } else {
      setInputs(prev => ({
        ...prev,
        [field]: parseFloat(value) || (field === 'chatbotType' ? value : 0)
      }));
    }
    setShowResults(false);
  };

  const calculateROI = () => {
    const config = chatbotConfigs[inputs.chatbotType];
    
    // Labor cost savings
    const currentAnnualLaborCost = inputs.supportAgents * inputs.avgSalary;
    const annualConversations = inputs.monthlyConversations * 12;
    const conversationsAutomated = annualConversations * (config.automationRate / 100);
    const hoursPerConversation = inputs.avgHandleTime / 60;
    const hoursAutomated = conversationsAutomated * hoursPerConversation;
    
    const workingHoursPerYear = 2080;
    const fteEquivalent = hoursAutomated / workingHoursPerYear;
    const laborSavings = fteEquivalent * inputs.avgSalary;
    
    // Revenue gains from recovered missed leads
    const avgLeadValue = 250; // Conservative estimate
    const missedLeadsRecovered = inputs.missedLeadsPerMonth * 12 * config.leadConversionBoost;
    const recoveredLeadRevenue = missedLeadsRecovered * avgLeadValue;
    
    // Additional revenue from faster response times and better engagement
    const currentMonthlyRevenue = inputs.monthlyConversations * 15; // $15 avg per conversation
    const currentAnnualRevenue = currentMonthlyRevenue * 12;
    const revenueIncrease = currentAnnualRevenue * (config.revenueMultiplier - 1);
    
    // Productivity gains (existing agents become more efficient)
    const productivityGainPerAgent = 8000; // $8k/year per agent from efficiency
    const productivityGains = inputs.supportAgents * productivityGainPerAgent;
    
    // Total benefits
    const totalBenefits = laborSavings + recoveredLeadRevenue + revenueIncrease + productivityGains;
    
    // Investment costs
    const firstYearInvestment = config.setupCost + (config.monthlyCost * 12);
    const ongoingAnnualCost = config.monthlyCost * 12;
    
    // Net savings & ROI
    const firstYearNetSavings = totalBenefits - firstYearInvestment;
    const ongoingNetSavings = totalBenefits - ongoingAnnualCost;
    const roi = ((firstYearNetSavings / firstYearInvestment) * 100).toFixed(0);
    const paybackMonths = (firstYearInvestment / (firstYearNetSavings / 12)).toFixed(1);
    
    return {
      config,
      currentAnnualLaborCost,
      laborSavings: Math.round(laborSavings),
      recoveredLeadRevenue: Math.round(recoveredLeadRevenue),
      revenueIncrease: Math.round(revenueIncrease),
      productivityGains: Math.round(productivityGains),
      totalBenefits: Math.round(totalBenefits),
      firstYearInvestment,
      ongoingAnnualCost,
      firstYearNetSavings: Math.round(firstYearNetSavings),
      ongoingNetSavings: Math.round(ongoingNetSavings),
      roi,
      paybackMonths: paybackMonths > 0 ? paybackMonths : '< 1',
      hoursAutomated: Math.round(hoursAutomated),
      conversationsAutomated: Math.round(conversationsAutomated),
      fteEquivalent: fteEquivalent.toFixed(1),
      missedLeadsRecovered: Math.round(missedLeadsRecovered)
    };
  };

  const results = showResults ? calculateROI() : null;

  return (
    <Card className="border-2 border-blue-200 shadow-2xl bg-gradient-to-br from-white to-blue-50">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Chat Widget ROI Calculator</h3>
            <p className="text-gray-600">Calculate your potential savings with AI-powered chat</p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {/* Chat Widget Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Chat Widget Type
            </label>
            <select
              value={inputs.chatbotType}
              onChange={(e) => handleInputChange('chatbotType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="all-in-one">All-In-One Chat (6 channels) - Highest ROI</option>
              <option value="voice-ai">Voice AI Chat Widget</option>
              <option value="live-chat">Live Chat Widget</option>
              <option value="whatsapp">WhatsApp Chat Widget</option>
            </select>
          </div>

          {/* Business Size Quick Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Size (Quick Select)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.keys(businessSizeDefaults).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleInputChange('businessSize', size)}
                  className={`px-4 py-3 rounded-lg font-medium border-2 transition-all ${
                    inputs.businessSize === size
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Support Agents */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Support Team Size
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={inputs.supportAgents}
              onChange={(e) => handleInputChange('supportAgents', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Average Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Annual Salary per Agent ($)
            </label>
            <input
              type="number"
              min="25000"
              max="150000"
              step="1000"
              value={inputs.avgSalary}
              onChange={(e) => handleInputChange('avgSalary', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Monthly Conversations */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Customer Conversations per Month
            </label>
            <input
              type="number"
              min="100"
              max="50000"
              step="100"
              value={inputs.monthlyConversations}
              onChange={(e) => handleInputChange('monthlyConversations', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Average Handle Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Handle Time per Conversation (minutes)
            </label>
            <input
              type="number"
              min="3"
              max="60"
              value={inputs.avgHandleTime}
              onChange={(e) => handleInputChange('avgHandleTime', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Missed Leads */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estimated Missed Leads per Month (after hours, slow response)
            </label>
            <input
              type="number"
              min="5"
              max="1000"
              step="5"
              value={inputs.missedLeadsPerMonth}
              onChange={(e) => handleInputChange('missedLeadsPerMonth', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <Button 
          type="button"
          onClick={() => setShowResults(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate My Savings
          <TrendingUp className="w-5 h-5 ml-2" />
        </Button>

        {showResults && results && (
          <div className="space-y-6 pt-6 mt-6 border-t-2 border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center">
              <div className="text-sm font-medium mb-2 opacity-90">
                {results.config.name}
              </div>
              <div className="text-4xl font-bold mb-1">
                ${results.firstYearNetSavings.toLocaleString()}
              </div>
              <div className="text-sm opacity-90">First Year Net Savings</div>
              <div className="mt-4 pt-4 border-t border-white/30 text-lg font-semibold">
                ${results.ongoingNetSavings.toLocaleString()}/year ongoing savings
              </div>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700">ROI</span>
                </div>
                <div className="text-3xl font-bold text-green-900">
                  {results.roi}%
                </div>
                <div className="text-xs text-green-700 mt-1">First year return</div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Payback Period</span>
                </div>
                <div className="text-3xl font-bold text-blue-900">
                  {results.paybackMonths}
                </div>
                <div className="text-xs text-blue-700 mt-1">Months to break even</div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">Automation Rate</span>
                </div>
                <div className="text-3xl font-bold text-purple-900">
                  {results.config.automationRate}%
                </div>
                <div className="text-xs text-purple-700 mt-1">Conversations automated</div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-700">Leads Recovered</span>
                </div>
                <div className="text-3xl font-bold text-orange-900">
                  {results.missedLeadsRecovered}
                </div>
                <div className="text-xs text-orange-700 mt-1">Additional leads per year</div>
              </div>
            </div>

            {/* Revenue & Cost Breakdown */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Complete Financial Impact</h4>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">💰 Labor Cost Savings</span>
                  <span className="font-bold text-green-600">+${results.laborSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">📈 Recovered Lead Revenue</span>
                  <span className="font-bold text-green-600">+${results.recoveredLeadRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">🚀 Revenue from Better Engagement</span>
                  <span className="font-bold text-green-600">+${results.revenueIncrease.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">⚡ Team Productivity Gains</span>
                  <span className="font-bold text-green-600">+${results.productivityGains.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b-2 border-gray-300 font-semibold">
                  <span className="text-gray-900">Total Annual Benefits</span>
                  <span className="text-green-600">+${results.totalBenefits.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">Setup Cost (Year 1 only)</span>
                  <span className="font-medium text-gray-900">-${results.config.setupCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b-2 border-gray-300">
                  <span className="text-gray-700">Annual Service Fee</span>
                  <span className="font-medium text-gray-900">-${results.ongoingAnnualCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-3 bg-gradient-to-r from-green-50 to-blue-50 px-4 -mx-4 rounded-lg">
                  <span className="font-bold text-gray-900 text-lg">💎 Net Savings (Year 1)</span>
                  <span className="font-bold text-green-700 text-lg">${results.firstYearNetSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-3 bg-gradient-to-r from-purple-50 to-blue-50 px-4 -mx-4 rounded-lg">
                  <span className="font-bold text-gray-900 text-lg">💎 Net Savings (Ongoing)</span>
                  <span className="font-bold text-purple-700 text-lg">${results.ongoingNetSavings.toLocaleString()}/year</span>
                </div>
              </div>
            </div>

            {/* Operational Impact */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Operational Impact</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{results.conversationsAutomated.toLocaleString()}</div>
                    <div className="text-gray-600">Conversations automated/year</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{results.hoursAutomated.toLocaleString()} hrs</div>
                    <div className="text-gray-600">Hours saved annually</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{results.fteEquivalent} FTE</div>
                    <div className="text-gray-600">Full-time equivalent saved</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{(results.config.leadConversionBoost * 100).toFixed(0)}%</div>
                    <div className="text-gray-600">Lead conversion boost</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center shadow-xl">
              <h4 className="text-2xl font-bold mb-3">
                Ready to save ${results.firstYearNetSavings.toLocaleString()} in Year 1?
              </h4>
              <p className="text-blue-100 mb-6 text-lg">
                Plus ${results.ongoingNetSavings.toLocaleString()}/year ongoing. {results.roi}% ROI. {results.paybackMonths} month payback.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  <a href="/contact">
                    Get Custom Quote
                  </a>
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-4">
                💡 These calculations are based on conservative industry averages. Your actual results may vary based on implementation and usage.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ROICalculator;
