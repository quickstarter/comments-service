const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DEST_DIR = path.join(__dirname, '/client/dist');
const SERVER_DIR = path.join(__dirname, '/server');

module.exports = [{
  entry: `${SRC_DIR}/clientIndex.jsx`,
  output: {
    filename: 'bundleClient.js',
    path: DEST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          'css-loader'
        ]
    },
    ],
  },
},
{
  entry: `${SRC_DIR}/serverIndex.jsx`,
  // target: 'node',
  output: {
   
    filename: 'bundleServer.js',
    path: DEST_DIR,
    library: 'test',
    libraryExport: 'default',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
          },
      },
    },
    {
        test: /\.css$/,
        use: [
          'to-string-loader',
          'css-loader'
        ]
    },
    ],
  },
}
]



