import API from 'lambda-api';
import { APIGatewayProxyHandler, APIGatewayEvent, APIGatewayProxyCallback, Context } from 'aws-lambda';
import { errorHandler } from './common/services/middleware/error';
import { JSONResponse } from './common/services/response/index';

import { RoutesV1 } from './routes';

const api = API({ version: 'v1.0', base: 'api' });

api.use((req, res, next) => {
  console.log(2);
  next();
});

api.register(RoutesV1, { prefix: '/v1' });

api.use(errorHandler);

api.use((req, res, next) => {
  console.log(2);
  next();
});

api.finally((req, res: any) => {
  console.log(res._response.body);
});

const handler: APIGatewayProxyHandler = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback) => {
  api.run(event, context, callback);
};

export { handler };
