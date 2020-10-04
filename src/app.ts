import API from 'lambda-api';
import { APIGatewayProxyHandler, APIGatewayEvent, APIGatewayProxyCallback, Context } from 'aws-lambda';
import { errorHandler } from './common/services/middleware/error';
import { JSONResponse } from './common/services/response/index';

import { Routes } from './routes';

const api = API({});

api.use((req, res, next) => {
  req.responseTime = Date.now();
  next();
});

api.register(Routes.employees, { prefix: '/v1' });
api.register(Routes.routes, { prefix: '/v1' });
api.register(Routes.customerOrders, { prefix: '/v1' });

api.get('/test', async (req, res) => {
  return res.status(200).json({ message: 'Hello World' });
});

api.get('/test2', async (req, res) => {
  return res.status(200).json({ message: 'Hello World 2' });
});

// api.any('/*', (req, res) => {
//   res.send({ error: 404 });
// });

api.use(errorHandler);

api.finally((req, res: any) => {
  console.log(req.responseTime, res._response.body);
});

const handler: APIGatewayProxyHandler = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback) => {
  api.run(event, context, callback);
};

export { handler };
