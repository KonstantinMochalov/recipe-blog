const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for the application
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the output directory before every build
  },
  module: {
    rules: [
      // Process JavaScript and JSX files using Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Process CSS modules
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
        ],
      },
      // Process regular CSS (non-modular)
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Process image files
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      // Process fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing files without specifying their extensions
  },
  plugins: [
    // Generates the HTML file and injects the bundle
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico', // Optional: Include a favicon
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser
  },
  mode: 'development', // Set the mode to development
};
