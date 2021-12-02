import { inject, injectable } from 'tsyringe';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository,
  ) {}

  execute({ name, description }: IRequest): void {
    if (this.specificationRepository.findByName(name)) {
      throw new Error(`Specification ${name} already exists`);
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
