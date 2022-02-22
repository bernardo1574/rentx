import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { AppError } from '../../../../errors/AppError';

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
  }: ICreaseUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists.');
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      driver_license,
      email,
      name,
      password: passwordHash,
    });
  }
}
export { CreateUserUseCase };
