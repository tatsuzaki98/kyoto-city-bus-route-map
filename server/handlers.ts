import express from 'express';
import {stops} from './utils';


export const getAllStops: express.RequestHandler = async (
    req: express.Request,
    res: express.Response,
): Promise<void> => {
  const result = stops;
  res.header(['Content-Type', 'application/json; charset=utf-8']);
  res.send(result);
};
