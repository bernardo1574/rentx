import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { UserRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  if (!req.headers.authorization) {
    throw new AppError('token missing', 401);
  }
  const [, token] = req.headers.authorization.split(' ');
  try {
    const { sub: user_id } = verify(
      token,
      '353c92e78723a3ad9c27e2ccbc9ddfbe',
    ) as IPayload;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('user not found');
    }

    req.user = {
      userId: user.id,
    };

    next();
  } catch (err) {
    throw new AppError('invalid token', 401);
  }
}
