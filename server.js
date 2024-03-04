const http = reqire('http');
const port = 4000;
const server = http.createSever((req,res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    res.end('Hello, world');
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}); 