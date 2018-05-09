const { loadProject } = require('./db.js');

const redisClient = require('redis').createClient;

let hitCount = 0;
let totalCount = 0;

const redis = redisClient(6379, 'localhost');
const cacheGetProject =  function(id, cb){
  redis.get(id, (redisErr, reply) => {
    total ++;
    if (total%1000 === 0){ console.log(hits/total)}

    if (redisErr) cb(redisErr,null, 500);
    else if (reply){
      hits++;
      cb(null, reply, 200);
    } else {
      loadProject(id, (err, reply)=>{
        if (err){
          cb(err,'', 500);
        } else {
          redis.set(id, JSON.stringify(reply), function () {
            cb(err, reply);
         })
        };
      });
    };
  })
} 


module.exports.cacheGetProject = cacheGetProject;