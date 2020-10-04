import { JSONResponse } from './../response/index';

export const responseMiddleware = (req, res, next) => {
  // middleware code
  const resp = new JSONResponse(req, res);
  req.jsonresponse = resp.$send();

  next();
};

export const packager = (req, responseBody) => {
  return Object.assign(req.jsonresponse, {
    data: responseBody
  });
};

export const errorPackager = (req, error) => {
  req.jsonresponse.errors = error;
  return req.jsonresponse;
};
