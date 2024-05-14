// webpack.config.js or webpack.config.dev.js

module.exports = {
    // Other webpack configurations...
  
    module: {
      rules: [
        // Other rules...
  
        // Rule for SCSS files
        {
          test: /\.scss$/,
          use: [
            'style-loader', // Adds CSS to the DOM by injecting a <style> tag
            'css-loader', // Translates CSS into CommonJS
            'sass-loader', // Compiles Sass to CSS
          ],
        },
      ],
    },
  };
  