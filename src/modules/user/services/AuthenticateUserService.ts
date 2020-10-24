import { getRepository } from 'typeorm';

import { sign } from 'jsonwebtoken';

import auth from '@config/auth';

import user_view from '../views/users_view';

import User from '../infra/typeorm/entities/User';
import BCryptHashProvider from '../providers/HashProvider/implementations/BCryptHashProvider';

interface Request {
    email: string;
    password: string;
}

interface UserReturn {
    id: string,
    name: string,
    email: string,
}

export default class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<{ user: UserReturn, token: string }> {
        const usersRepository = getRepository(User);
        const hashProvider = new BCryptHashProvider();

        const user = await usersRepository.findOne({ where: { email } });

        if (!user) {
            throw new Error('Incorrect email/password combination.');
        }

        const passwordMatched = await hashProvider.compareHash(password, user.password);

        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination.');
        }

        const { secret, expiredIn } = auth.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn: expiredIn
        });

        const userFormatted = user_view.render(user);

        return {
            user: userFormatted,
            token,
        };
    }
}