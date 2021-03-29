const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    example_list: './src/example_list.ts',
    example_stack: './src/example_stack.ts',
    example_queue: './src/example_queue.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};