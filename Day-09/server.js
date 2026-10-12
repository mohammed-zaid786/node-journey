const http = require('http');

const server = http.createServer((req, res) => {
    
    // Check if it is a GET request for the health check route
    if (req.method === 'GET' && req.url === '/api/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: 200, 
            message: 'Server is running fine' 
        }));
    } 
    
    // Check if it is a POST request for the data route
    else if (req.method === 'POST' && req.url === '/api/data') {
        let chunks = [];

        // Collect incoming data chunks as they arrive
        req.on('data', (piece) => {
            chunks.push(piece);
        });

        // When all chunks have been completely received
        req.on('end', () => {
            const fullBody = Buffer.concat(chunks).toString();
            let parsedData;
            
            try {
                parsedData = JSON.parse(fullBody);
            } catch (err) {
                parsedData = { data: fullBody };
            }

            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
                status: 201, 
                message: 'Data successfully received and buffered', 
                output: parsedData 
            }));
        });
    } 
    
    // Handle invalid routes with a 404 response
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: 404, 
            error: 'Route not found' 
        }));
    }
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});