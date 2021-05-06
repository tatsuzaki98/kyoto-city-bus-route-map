import express from 'express';
import {stops, lines} from './utils';


export const getAllStops: express.RequestHandler = async (
    req: express.Request,
    res: express.Response,
): Promise<void> => {
  const result = stops;
  res.header(['Content-Type', 'application/json; charset=utf-8']);
  res.send(result);
};


export const getLinesByStopId: express.RequestHandler = async (
    req: express.Request,
    res: express.Response,
): Promise<void> => {
  const stopId = req.params.stopId;
  const stop = stops[stopId];
  const lineIds = stop.properties.relations.lines;
  const relatedLines = lineIds.map((each) => lines[each]);
  res.header(['Content-Type', 'application/json; charset=utf-8']);
  res.send(relatedLines);
};
