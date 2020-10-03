import { handlersFactory } from '../../handlers';

export const employees = (api, options) => {
  api.get('/employees', handlersFactory.employeesHandler.GET);
  api.get('/employees/:id', handlersFactory.employeesHandler.GETBYID);
};
