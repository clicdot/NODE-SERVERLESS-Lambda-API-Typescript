import { responseMiddleware, packager } from './../../common/services/middleware/response';

export const routes = (api, options) => {
  api.get('/routes', responseMiddleware, async (req, res) => {
    return res.status(200).json(packager(req, { message: 'Hello World - Routes' }));
  });
};
