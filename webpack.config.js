const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: ['./app/app.js']
  },
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        }]
      }          
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: '**/*.{html,css}', context: 'app/' },
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })    
  ],
  mode: 'development',
  devtool: 'source-map'
};
