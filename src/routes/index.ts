import { responseTimeMiddleware, responseMiddleware } from './../common/services/middleware/response';
/** V1 Routes */
import { employees } from './employees';
import { routes } from './routes';
import { customerOrders } from './customers-orders';

export const RoutesV1 = (api, options) => {
  api.use(responseTimeMiddleware, responseMiddleware);

  return {
    // employees: employees(api, options),
    routes: routes(api, options),
    customerOrders: customerOrders(api, options)
  };
};
