var http = require('http');
var dt = require('./module');
var server = http.createServer(function(req,res)
{
    res.writeHead(200, {'content-type':'text/html'});
    const result=dt.datetime();
    res.write('curent Date and time : ');
    res.write(result);
    res.end()

})
server.listen(1234);