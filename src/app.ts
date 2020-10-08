import API from 'lambda-api';
import { APIGatewayProxyHandler, APIGatewayEvent, APIGatewayProxyCallback, Context } from 'aws-lambda';
import { errorHandler } from './common/services/middleware/error';
import { responseTimeMiddleware } from './common/services/middleware/response';
import { JSONResponse } from './common/services/response/index';

import { RoutesV1 } from './routes';

const api = API({ version: 'v1.0', base: 'api' });

api.use(responseTimeMiddleware);

// api.use((req, res, next) => {
//   console.log(2);
//   next();
// });

api.register(RoutesV1, { prefix: '/v1' });

api.get('/test', async (req, res, next) => {
  res.status(200).json({ message: 'Hello World' });
  next();
});

// api.get('/test2', async (req, res, next) => {
//   res.status(200).json({ message: 'Hello World 2' });
//   next();
// });

api.use(errorHandler);

// api.use((req, res, next) => {
//   console.log(2);
//   next();
// });

api.finally((req, res: any) => {
  console.log(res._response.body);
});

const handler: APIGatewayProxyHandler = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback) => {
  api.run(event, context, callback);
};

export { handler };
