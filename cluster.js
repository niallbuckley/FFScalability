const cluster = require('cluster');
const http = require('http');
var express = require('express');
var app = express();
//count machine's CPUs
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  //master process
  console.log(`Master ${process.pid} is running`);

  // create worker for each CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  //listen for dying workers
  cluster.on('exit', function() {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork(); 
  });
  
} else {
    //worker process
    console.log(`Worker ${process.pid} started`);
    require('./noCluster.js');
    
}
