import http, {IncomingMessage, RequestListener, Server, ServerResponse} from 'http';

const listener: RequestListener = (req:IncomingMessage , res : ServerResponse) => {
  if(req.method === 'POST' && req.url === '/message'){
    const body : any = [];
    req.on('data',(chunk) => {
        console.log(chunk)
        body.push(chunk)
      
    });
    req.on('end', ()=>{
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody)
    })
    return res.end()
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form></body>')
  res.write('</html>')
  res.end()
}
const server: Server = http.createServer(listener)
server.listen(5000)
