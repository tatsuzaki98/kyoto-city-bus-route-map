import express from 'express';
import {getAllStops} from './handlers';
import * as configs from './utils';


/*
 * Server Configuration
 */
const app: express.Express = express();
app.use(express.json());

/*
  request: /api/stops -d {primaryKeys: number[]}
  response: Stop[]
 */
app.get('/api/stops', getAllStops);
// app.post('/api/lines', getLines); // /api/lines -d {primaryKeys: number[]}
// app.post('/api/routes', getRoutes); // /api/routes -d {primaryKeys: number[]}
// app.post('/api/paths', getPaths); // /api/paths -d {primaryKeys: number[]}


/*
 * Reactのクライアントアプリを返す
 */
app.use('/static', express.static(`${__dirname}/static`));
app.get('/*', (_, res) => {
  res.sendFile(`${__dirname}/index.html`);
});


/**
 * Listen Port
 */
app.listen(configs.port, () => console.log(`
  Node Express Listening at http://localhost:${configs.port}
`));
