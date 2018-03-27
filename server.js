
var http = require('http');
    fs = require('fs');


http.createServer((req, res)=> {

  fs.readFile('index.html', { encoding: 'utf8' }, function(error, file) {
        if (!error) {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write(file);
            res.end();
        }
    });
    fs.appendFile("log.txt", `\n${req.url}`, function(err){
                    if (err) console.log("Error");
                })
}).listen(3000, () =>console.log('SERVER WORKS'));
