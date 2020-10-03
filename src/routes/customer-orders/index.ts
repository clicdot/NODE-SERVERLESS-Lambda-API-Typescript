export const customerOrders = (api, options) => {
  api.get('/customer-orders', async (req, res) => {
    return res.status(200).json({ message: 'Hello World - Customer Orders' });
  });
};
