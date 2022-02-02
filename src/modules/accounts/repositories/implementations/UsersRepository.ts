import { getRepository, Repository } from 'typeorm';
import { ICreaseUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create(data: ICreaseUserDTO): Promise<void> {
    const user = this.repository.create(data);
    await this.repository.save(user);
  }
}

export { UserRepository };
