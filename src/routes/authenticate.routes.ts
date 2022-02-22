import { Router } from 'express';

import { AuthenticateUserController } from '../modules/accounts/UseCases/authenticateUser/AuthenticateUserController';

const authenticateUserController = new AuthenticateUserController();

const authenticateRoutes = Router();

authenticateRoutes.post('/sessions', authenticateUserController.handle);

export { authenticateRoutes };
