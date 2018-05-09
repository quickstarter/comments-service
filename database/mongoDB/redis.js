const { loadProject } = require('./db.js');

var redisClient = require('redis').createClient;

// const db = require('./db.js');
var hits = 0;
var total = 0;

const redis = redisClient(6379, 'localhost');
const cacheGetProject =  function(id, cb){
  redis.get(id, (redisErr, reply) => {
    total ++;
    if (total%1000 === 0){ console.log(hits/total)}

    if (redisErr) cb(redisErr);
    else if (reply){
      hits++;
      cb(null, reply);
    } else {
      loadProject(id, (err, reply)=>{
        redis.set(id, JSON.stringify(reply), function () {
          cb(err, reply);
        });
      });
    };
  })
} 


module.exports.cacheGetProject = cacheGetProject;