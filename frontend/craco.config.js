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
      ];

      // Find source-map-loader rule and modify it
      const sourceMapRule = webpackConfig.module.rules.find(rule => 
        rule.use && rule.use.some && 
        rule.use.some(use => use.loader && use.loader.includes('source-map-loader'))
      );

      if (sourceMapRule) {
        // Exclude problematic modules from source-map-loader
        sourceMapRule.exclude = [
          /node_modules\/set-cookie-parser/,
          /node_modules\/react-router-dom/,
          /node_modules\/@remix-run/,
          /\.mjs$/,
          ...(sourceMapRule.exclude ? [sourceMapRule.exclude] : [])
        ];
      }

      // Alternative: completely disable source-map-loader for node_modules
      webpackConfig.module.rules = webpackConfig.module.rules.map(rule => {
        if (rule.use && rule.use.some && 
            rule.use.some(use => use.loader && use.loader.includes('source-map-loader'))) {
          return {
            ...rule,
            exclude: [
              /node_modules/,
              ...(rule.exclude ? [rule.exclude] : [])
            ]
          };
        }
        return rule;
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