import { getRepository } from 'typeorm';

import User from '../infra/typeorm/entities/User';

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const user = usersRepository.create({ name, email, password });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;