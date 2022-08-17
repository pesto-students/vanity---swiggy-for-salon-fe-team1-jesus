const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', '/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // {
      //   test: /\.s?css$/,
      //   // exclude: [resolvePath('../src/styles')],
      //   use: [
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         localsConvention: 'camelCase',
      //         modules: true,
      //       },
      //     },
      //     'sass-loader',
      //     'import-glob-loader',
      //   ],
      // },
      {
        test: /\.html$/,
        // exclude: [/node_modules/, require.resolve('/src/index.html')],
        exclude: [/node_modules/],

        use: {
          loader: 'file-loader',
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'images',
            outputPath: 'images',
          },
        },
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, 'src', 'index.html'),
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
