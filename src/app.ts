import API from 'lambda-api';
import { APIGatewayProxyHandler, APIGatewayEvent, APIGatewayProxyCallback, Context } from 'aws-lambda';

import { Routes } from './routes';

const api = API({});

api.register(Routes.employees, { prefix: '/v1' });
api.register(Routes.routes, { prefix: '/v1' });
api.register(Routes.customerOrders, { prefix: '/v1' });

api.get('/test', async (req, res) => {
  return res.status(200).json({ message: 'Hello World' });
});

api.get('/test2', async (req, res) => {
  return res.status(200).json({ message: 'Hello World 2' });
});

api.options('/*', (req, res) => {
  res.send({ error: 404 });
});

// test

const handler: APIGatewayProxyHandler = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback) => {
  api.run(event, context, callback);
};

export { handler };
