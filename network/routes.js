const express = require("express");
const message = require('../components/message/network');


const routes = function(server) {
  // API routes
  server.use("/message", message);

  
}

module.exports = routes;