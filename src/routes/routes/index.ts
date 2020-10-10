import { packager } from './../../common/services/middleware/response';

export const routes = (api, options) => {
  api.get('/routes', async (req, res) => {
    console.log(1);
    res.status(200).json(packager(req, { message: 'Hello World - Routes' }));
  });
};
