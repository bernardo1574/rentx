import { Router } from 'express';
import { accountRoutes } from './accounts.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);
router.use('/accounts', accountRoutes);
router.use(authenticateRoutes);

export { router };
