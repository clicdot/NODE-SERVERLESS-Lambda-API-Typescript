export const routes = (api, options) => {
  api.get('/routes', async (req, res) => {
    return res.status(200).json({ message: 'Hello World - Routes' });
  });
};
