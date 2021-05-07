import express from 'express';
import {getAllStops, getLinesByStopId, getPathsByLineId} from './handlers';
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

/*
  request: /api/stops/{stopId}/lines
  response: Lines[] - stopIdのバス停を通る路線
 */
app.get('/api/stops/:stopId/lines', getLinesByStopId);

/*
  request: /api/lines/{lineId}/paths
  response: Paths[] - lineIdの各区間
 */
app.get('/api/lines/:lineId/paths', getPathsByLineId);
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
