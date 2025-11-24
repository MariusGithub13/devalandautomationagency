import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    supportAgents: 3,
    avgSalary: 40000,
    ticketsPerMonth: 500,
    automationRate: 80
  });

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
    setShowResults(false);
  };

  const calculateROI = () => {
    const currentAnnualCost = inputs.supportAgents * inputs.avgSalary;
    const ticketsAutomated = (inputs.ticketsPerMonth * 12 * inputs.automationRate) / 100;
    const totalTicketsPerYear = inputs.ticketsPerMonth * 12;
    const timePerTicket = 10; // minutes average
    const hoursAutomated = (ticketsAutomated * timePerTicket) / 60;
    
    // AI agent costs
    const setupCost = 5000; // Growth Suite
    const monthlyMaintenanceCost = 500; // estimated
    const annualAICost = setupCost + (monthlyMaintenanceCost * 12);
    
    // Calculate FTE equivalent saved
    const workingHoursPerYear = 2080; // standard full-time
    const fteEquivalent = hoursAutomated / workingHoursPerYear;
    const costSavings = fteEquivalent * inputs.avgSalary;
    
    // Net savings
    const netAnnualSavings = costSavings - annualAICost;
    const roi = ((netAnnualSavings / annualAICost) * 100).toFixed(0);
    const paybackMonths = (annualAICost / (netAnnualSavings / 12)).toFixed(1);
    
    return {
      currentAnnualCost,
      annualAICost,
      costSavings,
      netAnnualSavings,
      roi,
      paybackMonths,
      hoursAutomated: Math.round(hoursAutomated),
      ticketsAutomated: Math.round(ticketsAutomated),
      fteEquivalent: fteEquivalent.toFixed(1)
    };
  };

  const results = showResults ? calculateROI() : null;

  return (
    <Card className="border-2 border-blue-500 shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Calculator className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
            <p className="text-gray-600">Calculate your potential savings with Voice AI</p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {/* Support Agents */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Support Agents
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
              min="20000"
              max="150000"
              step="1000"
              value={inputs.avgSalary}
              onChange={(e) => handleInputChange('avgSalary', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Tickets Per Month */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Support Tickets per Month
            </label>
            <input
              type="number"
              min="50"
              max="10000"
              step="50"
              value={inputs.ticketsPerMonth}
              onChange={(e) => handleInputChange('ticketsPerMonth', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Automation Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Automation Rate (%)
            </label>
            <input
              type="range"
              min="50"
              max="90"
              step="5"
              value={inputs.automationRate}
              onChange={(e) => handleInputChange('automationRate', e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>50%</span>
              <span className="font-bold text-blue-600">{inputs.automationRate}%</span>
              <span>90%</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={() => setShowResults(true)}
          className="w-full btn-primary text-white mb-6"
          size="lg"
        >
          Calculate My Savings
          <TrendingUp className="w-5 h-5 ml-2" />
        </Button>

        {showResults && results && (
          <div className="space-y-6 pt-6 border-t-2 border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Your Potential Savings</h4>
            
            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Annual Savings</span>
                </div>
                <div className="text-3xl font-bold text-green-900">
                  ${results.netAnnualSavings.toLocaleString()}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">ROI</span>
                </div>
                <div className="text-3xl font-bold text-blue-900">
                  {results.roi}%
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Current Annual Support Cost</span>
                <span className="font-bold">${results.currentAnnualCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Tickets Automated per Year</span>
                <span className="font-bold">{results.ticketsAutomated.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Hours Saved per Year</span>
                <span className="font-bold">{results.hoursAutomated.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>FTE Equivalent Saved</span>
                <span className="font-bold">{results.fteEquivalent} employees</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span>Voice AI Investment (Year 1)</span>
                <span className="font-bold">${results.annualAICost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b-2 border-gray-300">
                <span className="font-bold">Net Annual Savings</span>
                <span className="font-bold text-green-600">${results.netAnnualSavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold">Payback Period</span>
                <span className="font-bold text-blue-600">{results.paybackMonths} months</span>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center mt-6">
              <p className="text-lg mb-4">
                Ready to save <span className="font-bold">${results.netAnnualSavings.toLocaleString()}</span> per year?
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                </a>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ROICalculator;
