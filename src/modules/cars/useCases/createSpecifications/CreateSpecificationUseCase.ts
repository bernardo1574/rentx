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

  async execute({ name, description }: IRequest): Promise<void> {
    const existsSpecification = await this.specificationRepository.findByName(
      name,
    );
    if (existsSpecification) {
      throw new Error(`Specification ${name} already exists`);
    }
    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
