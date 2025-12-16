#!/usr/bin/env node

/**
 * Lazy Loading Test Script
 * 
 * This script helps developers test the lazy loading implementation
 * by checking for proper patterns in the codebase.
 * 
 * Usage: node scripts/test-lazy-loading.js
 */

const fs = require('fs');
const path = require('path');

const checks = {
  passed: [],
  failed: [],
  warnings: []
};

console.log('🔍 Testing Lazy Loading Implementation...\n');

// Test 1: Check if lazyScriptLoader utility exists
const utilityPath = path.join(__dirname, '../src/utils/lazyScriptLoader.js');
if (fs.existsSync(utilityPath)) {
  checks.passed.push('✅ lazyScriptLoader utility exists');
  
  const utilityContent = fs.readFileSync(utilityPath, 'utf-8');
  
  // Check for key functions
  if (utilityContent.includes('loadScriptOnInteraction')) {
    checks.passed.push('✅ loadScriptOnInteraction function found');
  } else {
    checks.failed.push('❌ loadScriptOnInteraction function not found');
  }
  
  if (utilityContent.includes('loadScriptOnIdle')) {
    checks.passed.push('✅ loadScriptOnIdle function found');
  } else {
    checks.failed.push('❌ loadScriptOnIdle function not found');
  }
  
  if (utilityContent.includes('loadScriptsSequentially')) {
    checks.passed.push('✅ loadScriptsSequentially function found');
  } else {
    checks.failed.push('❌ loadScriptsSequentially function not found');
  }
  
  // Check for cleanup pattern
  if (utilityContent.includes('removeEventListener')) {
    checks.passed.push('✅ Proper cleanup with removeEventListener');
  } else {
    checks.warnings.push('⚠️  No removeEventListener found - check for memory leaks');
  }
} else {
  checks.failed.push('❌ lazyScriptLoader utility not found');
}

// Test 2: Check ChatBubble component
const chatBubblePath = path.join(__dirname, '../src/components/ChatBubble.jsx');
if (fs.existsSync(chatBubblePath)) {
  const chatBubbleContent = fs.readFileSync(chatBubblePath, 'utf-8');
  
  if (chatBubbleContent.includes('loadScriptOnInteraction')) {
    checks.passed.push('✅ ChatBubble uses loadScriptOnInteraction');
  } else {
    checks.failed.push('❌ ChatBubble does not use loadScriptOnInteraction');
  }
  
  if (chatBubbleContent.includes('from') && chatBubbleContent.includes('lazyScriptLoader')) {
    checks.passed.push('✅ ChatBubble imports lazyScriptLoader');
  } else {
    checks.failed.push('❌ ChatBubble does not import lazyScriptLoader');
  }
}

// Test 3: Check TrustpilotWidget component
const trustpilotPath = path.join(__dirname, '../src/components/TrustpilotWidget.jsx');
if (fs.existsSync(trustpilotPath)) {
  const trustpilotContent = fs.readFileSync(trustpilotPath, 'utf-8');
  
  if (trustpilotContent.includes('loadScriptOnInteraction')) {
    checks.passed.push('✅ TrustpilotWidget uses loadScriptOnInteraction');
  } else {
    checks.failed.push('❌ TrustpilotWidget does not use loadScriptOnInteraction');
  }
}

// Test 4: Check ContactPage for reCAPTCHA optimization
const contactPagePath = path.join(__dirname, '../src/pages/ContactPage.jsx');
if (fs.existsSync(contactPagePath)) {
  const contactPageContent = fs.readFileSync(contactPagePath, 'utf-8');
  
  if (contactPageContent.includes('focus') || contactPageContent.includes('input')) {
    checks.passed.push('✅ ContactPage loads reCAPTCHA on interaction');
  } else {
    checks.warnings.push('⚠️  ContactPage may not have interaction-based reCAPTCHA loading');
  }
  
  // Check for proper cleanup
  if (contactPageContent.includes('return () =>') && contactPageContent.includes('removeEventListener')) {
    checks.passed.push('✅ ContactPage has proper cleanup');
  } else {
    checks.warnings.push('⚠️  ContactPage may not have proper cleanup');
  }
}

// Test 5: Check index.html for GTM optimization
const indexHtmlPath = path.join(__dirname, '../public/index.html');
if (fs.existsSync(indexHtmlPath)) {
  const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');
  
  if (indexHtmlContent.includes('scroll') && indexHtmlContent.includes('touchstart')) {
    checks.passed.push('✅ index.html uses interaction-based GTM loading');
  } else {
    checks.warnings.push('⚠️  index.html may not have interaction-based GTM loading');
  }
  
  // Check for immediate GTM loading (anti-pattern)
  if (indexHtmlContent.includes('gtm.js') && !indexHtmlContent.includes('addEventListener')) {
    checks.warnings.push('⚠️  GTM may be loading immediately instead of on interaction');
  }
}

// Test 6: Check for async without defer (good)
const allJsFiles = [
  chatBubblePath,
  trustpilotPath,
  utilityPath
].filter(fs.existsSync);

allJsFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);
  
  // Check if both async and defer are set (anti-pattern)
  if (content.includes('script.async = true') && content.includes('script.defer = true')) {
    checks.warnings.push(`⚠️  ${fileName} sets both async and defer (defer is ignored)`);
  }
});

// Print results
console.log('📊 Test Results:\n');

if (checks.passed.length > 0) {
  console.log('✅ Passed Checks:');
  checks.passed.forEach(check => console.log(`   ${check}`));
  console.log('');
}

if (checks.warnings.length > 0) {
  console.log('⚠️  Warnings:');
  checks.warnings.forEach(warning => console.log(`   ${warning}`));
  console.log('');
}

if (checks.failed.length > 0) {
  console.log('❌ Failed Checks:');
  checks.failed.forEach(fail => console.log(`   ${fail}`));
  console.log('');
}

// Summary
const total = checks.passed.length + checks.failed.length + checks.warnings.length;
console.log('─'.repeat(50));
console.log(`Total Checks: ${total}`);
console.log(`Passed: ${checks.passed.length}`);
console.log(`Warnings: ${checks.warnings.length}`);
console.log(`Failed: ${checks.failed.length}`);
console.log('─'.repeat(50));

// Exit code
if (checks.failed.length > 0) {
  console.log('\n❌ Some checks failed. Please review the implementation.\n');
  process.exit(1);
} else if (checks.warnings.length > 0) {
  console.log('\n⚠️  Some warnings found. Please review for optimization.\n');
  process.exit(0);
} else {
  console.log('\n✅ All checks passed! Lazy loading is properly implemented.\n');
  process.exit(0);
}
