module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        historyApiFallback: true
    },
    module: {
      rules: [
        // ...other loaders...
        {
            // Match w/ JS or JSX extension
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            // Use babel-loader for transpiling JavaScript files
            loader: 'babel-loader',
            options: {
                // Attach the presets to the loader (most projects use .babelrc file instead)
              presets: ['@babel/preset-react']
            }
          }
        }
      ]
    }
  };
  