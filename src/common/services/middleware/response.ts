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
  req.jsonresponse.response.errors = error.message;
  console.log('SSS', error);
  return req.jsonresponse;
};

export const responseTimeMiddleware = (req, res, next) => {
  console.log(4);
  req.responseTime = Date.now();
  next();
};
