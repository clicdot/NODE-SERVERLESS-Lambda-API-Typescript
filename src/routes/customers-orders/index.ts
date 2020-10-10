import { packager } from './../../common/services/middleware/response';

export const customerOrders = (api, options) => {
  api.get('/customers-orders', async (req, res) => {
    res.status(200).json(packager(req, { message: 'Hello World - Customer Orders' }));
  });
};
