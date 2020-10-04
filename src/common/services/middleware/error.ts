import { JSONResponse } from './../response/index';
import { responseMiddleware, errorPackager } from '../middleware/response';

export const errorHandler = (err, req, res, next) => {
  // do something with the error
  err && console.error('ERROR', err);
  responseMiddleware(req, res, next);
  return res.status(200).json(errorPackager(req, err));
  next();
};
