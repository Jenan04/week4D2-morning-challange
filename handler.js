const fs = require("fs")
const path = require("path") 

const ifHandler = (err, file, res, contentType = 'text/html') =>{
    if (err) {
       res.writeHead(500, {'content-type': 'text/plain'});
       res.end('server error');
       } else {
       res.writeHead(200, {'content-type': contentType});
       res.end(file);
       }

}

const homeHandler = (req, res) => {
    fs.readFile(path.join(__dirname, 'fac.html'), 'utf8', (err, file) => {
       ifHandler(err, file, res, 'text/html');
    });
}

const facHandler = (req,res) => {
      fs.readFile(path.join(__dirname, 'fac.html'), 'utf8', (err, file) => {
          ifHandler(err, file, res, 'text/html')
        });
}

const dwylHandler = (req,res) => {
      fs.readFile(path.join(__dirname, 'dwyl.html'), 'utf8', (err, file) => {
          ifHandler(err, file, res, 'text/html')
        });
}


const cssHandler = (req,res) => {
      fs.readFile(path.join(__dirname, 'stylesheet.css'), 'utf8', (err, file) => {
          ifHandler(err, file, res, 'text/css')
        });
}

const reqHandler = (req,res) => {
      fs.readFile(path.join(__dirname, 'request.js'), 'utf8', (err, file) => {
          ifHandler(err, file, res, 'text/javascript')
        });
}

const indexHandler = (req,res) => {
      fs.readFile(path.join(__dirname, 'index.js'), 'utf8', (err, file) => {
          ifHandler(err, file, res, 'text/javascript')
        });
}

const reposFacHandler = (req,res) => {
      fs.readFile(path.join(__dirname, 'index.js'), 'utf8', (err, file) => {
          ifHandler(err, file, res, 'text/javascript')
        });
}

const reposDwylHandler = (req,res) => {
      fs.readFile(path.join(__dirname, 'index.js'), 'utf8', (err, file) => {
          ifHandler(err, file, res, 'text/javascript')
        });
}

const jsonHandler = (res, data) => {
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(data));
}


module.exports = {
    homeHandler,
    facHandler,
    dwylHandler,
    cssHandler,
    reqHandler,
    indexHandler,
    reposFacHandler,
    reposDwylHandler,
    jsonHandler
}