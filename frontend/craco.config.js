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
      // Disable source maps completely for problematic modules
      webpackConfig.devtool = process.env.NODE_ENV === 'production' ? false : 'eval-source-map';
      
      // Ignore source map warnings for missing files
      webpackConfig.ignoreWarnings = [
        {
          module: /set-cookie-parser/,
        },
        {
          module: /react-router-dom/,
        },
        /Failed to parse source map/,
        /ENOENT: no such file or directory/,
        /Module Warning/,
      ];

      // Completely remove or disable source-map-loader to prevent issues
      webpackConfig.module.rules = webpackConfig.module.rules.filter(rule => {
        if (rule.use && rule.use.some && 
            rule.use.some(use => use.loader && use.loader.includes('source-map-loader'))) {
          return false; // Remove source-map-loader completely
        }
        return true;
      });
      
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