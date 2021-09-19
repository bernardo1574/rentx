import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecifiationController } from './CreateSpecifiationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository,
);
const createSpecificationController = new CreateSpecifiationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
