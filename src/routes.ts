import { IncomingMessage, ServerResponse } from 'http';

export const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/') {
    res.end('Hello there');
  } else if (req.url === '/users') {
    res.end('some html here');
  }
};
