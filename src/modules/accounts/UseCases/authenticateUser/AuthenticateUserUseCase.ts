import { inject, injectable } from 'tsyringe';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUsersRepository,
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    // verifica se o usuário existe
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect!');
    }

    // verifica se a senha está correta
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Email or password incorrect!');
    }

    const token = sign({}, '353c92e78723a3ad9c27e2ccbc9ddfbe', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}

export { AuthenticateUserUseCase };
