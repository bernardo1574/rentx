import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/UseCases/createUser/CreateUserController';

const createUserController = new CreateUserController();

const accountRoutes = Router();

accountRoutes.post('/', createUserController.handle);

export { accountRoutes };
