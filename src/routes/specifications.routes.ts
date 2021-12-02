import { Router } from 'express';
import { CreateSpecifiationController } from '../modules/cars/useCases/createSpecifications/CreateSpecifiationController';

const createSpecificationController = new CreateSpecifiationController();
const specificationRoutes = Router();

specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
