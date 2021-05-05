import express from 'express';
import {stops} from './utils';


const handlePost: express.RequestHandler = async (
    req: express.Request,
    res: express.Response,
): Promise<void> => {
  console.log(req.path);
  const reqBody: {primaryKeys: number[]} = {primaryKeys: [], ...req.body};
  const primaryKeys: number[] = reqBody.primaryKeys;
  const result = primaryKeys.map((eachKey) => stops[`${eachKey}`]);
  res.header(['Content-Type', 'application/json; charset=utf-8']);
  res.send(result);
};

export default handlePost;
