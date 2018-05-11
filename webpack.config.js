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
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
},
{
  entry: `${SRC_DIR}/serverIndex.jsx`,
  target: 'node',
  output: {
    filename: 'bundleServer.js',
    path: DEST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
}
]



