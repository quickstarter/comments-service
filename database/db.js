const mongoose = require('mongoose');

//const mongoDB = 'mongodb://localhost/UpdatesAndComments';
const mongoDB = 'mongodb://172.17.0.2/UpdatesAndComments';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('connected to mongo!!!');
});

const updatesCommentsSchema = new mongoose.Schema({
  id: Number,
  createdAt: Date,
  updates: [{
    title: String,
    body: String,
    date: Date,
    likes: Number,
    comments: [{
      userId: Number,
      avatar: String,
      username: String,
      date: Date,
      body: String,
    }],
  }],
  comments: [{
    userId: Number,
    avatar: String,
    username: String,
    date: Date,
    body: String,
  }],
});

const UpdatesAndComments = mongoose.model('UpdatesComments', updatesCommentsSchema);

const loadProject = (projectId, callback) => {
  // should find project id and call callback on project returned from DB
  UpdatesAndComments
    .find({ id: projectId })
    .exec(callback);
};

// db method test
// loadProject(0, (err, res) => {console.log(res)});

module.exports.db = db;
module.exports.UpdatesAndComments = UpdatesAndComments;
module.exports.loadProject = loadProject;
