/** V1 Routes */
import { employees } from './employees';
import { routes } from './routes';
import { customerOrders } from './customers-orders';

export const RoutesV1 = (api, options) => {
  api.use((req, res, next) => {
    console.log(3);
    next();
  });
  return {
    // employees: employees(api, options),
    routes: routes(api, options),
    customerOrders: customerOrders(api, options)
  };
};

// export const RoutesV1 = {
//   routes
// };
