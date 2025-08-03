const handlers = require("./handler")

const fs = require('fs');
const path = require('path');
const repos = require('./repos.json');

const router = (req, res) => {
  const url = req.url;

  console.log('URL: ', url);

  if (url === '/') {
    handlers.homeHandler(req, res);
  } 
  else if (url === '/fac') {
     handlers.facHandler(req, res)
  } 
  else if (url === '/dwyl') {
    handlers.dwylHandler(req, res)
    
  } 
  else if (url === '/css/stylesheet.css') {
    handlers.cssHandler(req, res)
  } 
  else if (url === '/js/request.js') {
     handlers.reqHandler(req, res)
  }
   else if (url === '/js/index.js') {
     handlers.indexHandler(req, res)
  } 
  else if (url === '/api/repos/fac') {
    handlers.jsonHandler(res, repos.fac);
  } 
  else if (url === '/api/repos/dwyl') {
    handlers.jsonHandler(res, repos.dwyl);
  } 
  else {
    res.writeHead(404, {'content-type': 'text/plain'});
    res.end('404 server error');
  }
}
module.exports = router;