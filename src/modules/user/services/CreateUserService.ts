import { getRepository } from 'typeorm';

import user_view from '../views/users_view';

import User from '../infra/typeorm/entities/User';
import BCryptHashProvider from '../providers/HashProvider/implementations/BCryptHashProvider';

interface Request {
    name: string;
    email: string;
    password: string;
}

interface UserReturn {
    id: string,
    name: string,
    email: string,
}

class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<UserReturn> {
        const usersRepository = getRepository(User);
        const hashProvider = new BCryptHashProvider();

        const hashedPassword = await hashProvider.generateHash(password);

        const user = usersRepository.create({ name, email, password: hashedPassword });

        await usersRepository.save(user);

        const userFormatted = user_view.render(user);

        return userFormatted;
    }
}

export default CreateUserService;