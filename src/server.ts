import express from 'express';
import path from 'path';
import routes from './routes/index';
require('dotenv').config();

const server = express();
let viewsPath = path.join(__dirname, 'views');

server.set('view engine', 'ejs');
server.set('views', viewsPath);

server.use(express.static(path.join(__dirname, '../public')));

server.use(routes);

server.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running');
  })