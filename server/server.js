require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/mongoDB/db.js');
const cluster = require('cluster');
const cors = require('cors');
const { cacheGetProject } = require('../database/mongoDB/redis.js');
const app = express();
const port = 3005;

if (cluster.isMaster){
  const cpus = require('os').cpus().length;
  for (let i = 0; i<cpus; i++){
    cluster.fork();
   
  }
}else{
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

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}
cluster.on('exit', (worker)=>{cluster.fork()})
