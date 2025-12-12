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
    configure: (webpackConfig, { env }) => {
      // Completely disable source maps
      webpackConfig.devtool = false;
      
      // More aggressive approach - completely rebuild module rules without source-map-loader
      const newRules = [];
      
      webpackConfig.module.rules.forEach(rule => {
        // Skip any rule that mentions source-map-loader
        if (rule.use) {
          if (Array.isArray(rule.use)) {
            const hasSourceMapLoader = rule.use.some(use => 
              (typeof use === 'string' && use.includes('source-map-loader')) ||
              (typeof use === 'object' && use.loader && use.loader.includes('source-map-loader'))
            );
            if (!hasSourceMapLoader) {
              newRules.push(rule);
            }
          } else if (typeof rule.use === 'object') {
            if (!rule.use.loader || !rule.use.loader.includes('source-map-loader')) {
              newRules.push(rule);
            }
          } else {
            newRules.push(rule);
          }
        } else if (rule.loader) {
          if (!rule.loader.includes('source-map-loader')) {
            newRules.push(rule);
          }
        } else {
          newRules.push(rule);
        }
      });
      
      webpackConfig.module.rules = newRules;

      // Ignore all warnings
      webpackConfig.ignoreWarnings = [
        () => true, // Ignore all warnings
      ];

      // Disable performance hints
      webpackConfig.performance = {
        hints: false,
      };

      // Production optimizations
      if (env === 'production') {
        // CRITICAL: Disable HTML minification completely - set to false not an empty object
        webpackConfig.plugins = webpackConfig.plugins.map(plugin => {
          if (plugin.constructor && plugin.constructor.name === 'HtmlWebpackPlugin') {
            // Force minify to false - not undefined, not {}, but explicitly false
            plugin.options = plugin.options || {};
            plugin.options.minify = false;
            
            // Also try userOptions for different webpack versions
            if (plugin.userOptions) {
              plugin.userOptions.minify = false;
            }
          }
          return plugin;
        });
        
        // Remove console.* calls in production
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          minimize: true,
          usedExports: true,
        };

        // Add TerserPlugin configuration for aggressive minification
        const TerserPlugin = require('terser-webpack-plugin');
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: false, // We handle via NODE_ENV checks
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info', 'console.debug'],
              },
              mangle: true,
              output: {
                comments: false,
              },
            },
            extractComments: false,
          }),
        ];
      }
      
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