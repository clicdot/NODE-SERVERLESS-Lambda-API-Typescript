import { servicesFactory } from '../../services';

export const GET = async (req, res, next) => {
  const SVC = new servicesFactory.EmployeesService();
  return SVC.find();
};

export const GETBYID = async (req, res, next) => {
  const { id } = req.params;
  const SVC = new servicesFactory.EmployeesService();
  console.log(id);
  return SVC.findById(id);
};
