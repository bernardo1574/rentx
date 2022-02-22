import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecifiationController } from '../modules/cars/useCases/createSpecifications/CreateSpecifiationController';

const createSpecificationController = new CreateSpecifiationController();
const specificationRoutes = Router();
specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
