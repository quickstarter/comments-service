require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/mongoDB/db.js');
const cors = require('cors');
const { cacheGetProject } = require('../database/mongoDB/redis.js');
const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/updates/:id', (req, res) => {
  cacheGetProject(req.params.id, (err, project, status) => {
    if (err) {
      res.status(status)
      res.send(err)
    } else {
      project = (typeof project === 'string') ? project : JSON.stringify(project); 
      res.send(project);
    }
  });
});


// app.post('/api/updates/:id', (req,res) => {
//   db.saveComment(req)
// }
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

