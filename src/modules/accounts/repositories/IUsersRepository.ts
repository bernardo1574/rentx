import { ICreaseUserDTO } from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  create(data: ICreaseUserDTO): Promise<void>;
}

export { IUsersRepository };
