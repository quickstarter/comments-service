const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');
const cors = require('cors');

const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/updates/:id', (req, res) => {
  db.loadProject(req.params.id, (err, project) => {
    if (err) {
      console.log('ERROR LOADING PROJECT', err);
    } else {
      res.json(project);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

