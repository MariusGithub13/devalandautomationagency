// Load configuration from environment or config file
const path = require('path');

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === 'true',
};

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // Completely disable source maps
      webpackConfig.devtool = false;
      
      // Remove source-map-loader entirely from webpack rules
      webpackConfig.module.rules = webpackConfig.module.rules.filter(rule => {
        // Remove any rule that uses source-map-loader
        if (rule.use) {
          if (Array.isArray(rule.use)) {
            return !rule.use.some(use => 
              typeof use === 'object' && 
              use.loader && 
              use.loader.includes('source-map-loader')
            );
          } else if (typeof rule.use === 'object' && rule.use.loader) {
            return !rule.use.loader.includes('source-map-loader');
          }
        }
        if (rule.loader && rule.loader.includes('source-map-loader')) {
          return false;
        }
        return true;
      });

      // Also remove any enforce: 'pre' rules that might be source-map-loader
      webpackConfig.module.rules = webpackConfig.module.rules.filter(rule => {
        if (rule.enforce === 'pre') {
          if (rule.use && Array.isArray(rule.use)) {
            return !rule.use.some(use => 
              use.loader && use.loader.includes('source-map-loader')
            );
          }
          if (rule.loader && rule.loader.includes('source-map-loader')) {
            return false;
          }
        }
        return true;
      });

      // Ignore all source map related warnings
      webpackConfig.ignoreWarnings = [
        /Failed to parse source map/,
        /ENOENT.*\.map/,
        /Can't resolve.*\.map/,
        { module: /react-router/ },
        { module: /set-cookie-parser/ },
        /Module Warning/,
      ];
      
      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Remove hot reload related plugins
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
          return !(plugin.constructor.name === 'HotModuleReplacementPlugin');
        });
        
        // Disable watch mode
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/, // Ignore all files
        };
      } else {
        // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
          ],
        };
      }
      
      return webpackConfig;
    },
  },
};