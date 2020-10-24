import { getRepository } from 'typeorm';

import User from '../infra/typeorm/entities/User';
import BCryptHashProvider from '../providers/HashProvider/implementations/BCryptHashProvider';

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);
        const hashProvider = new BCryptHashProvider();

        const hashedPassword = await hashProvider.generateHash(password);

        const user = usersRepository.create({ name, email, password: hashedPassword });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;