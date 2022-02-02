import { inject, injectable } from 'tsyringe';
import { ICreaseUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUsersRepository,
  ) {}
  async execute({
    driver_license,
    email,
    name,
    password,
    username,
  }: ICreaseUserDTO): Promise<void> {
    await this.userRepository.create({
      driver_license,
      email,
      name,
      password,
      username,
    });
  }
}
export { CreateUserUseCase };
