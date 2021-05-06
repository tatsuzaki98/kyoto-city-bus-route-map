import {readFileSync} from 'fs';
import path from 'path';
import {Line, Path, Route, Stop} from './schema';


/*
  port
 */
export const port = process.env.PORT || 8080;

/*
  Data
 */
export const lines = JSON.parse(readFileSync(
    path.resolve('data/lines.json'),
    'utf-8',
)) as {[key: string]: Line};
export const paths = JSON.parse(readFileSync(
    path.resolve('data/paths.json'),
    'utf-8',
)) as {[key: string]: Path};
export const routes = JSON.parse(readFileSync(
    path.resolve('data/routes.json'),
    'utf-8',
)) as {[key: string]: Route};
export const stops = JSON.parse(readFileSync(
    path.resolve('data/stops.json'),
    'utf-8',
)) as {[key: string]: Stop};
