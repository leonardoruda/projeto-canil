import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import routes from './routes/index';
require('dotenv').config();

const server = express();

let viewsPath = path.join(__dirname, 'views');
server.set('view engine', 'mustache');
server.set('views', viewsPath);
//server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(routes);

server.use((req, res) => {
    res.render('pages/404');
})

server.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running');
    console.log(`Views path: `, viewsPath);
  })