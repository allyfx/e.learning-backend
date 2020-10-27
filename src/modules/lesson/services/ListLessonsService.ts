import { getRepository } from 'typeorm';

import Lesson from '../infra/typeorm/entities/Lesson';

class CreateUserService {
    public async execute(): Promise<Lesson[]> {
        const lessonsRepository = getRepository(Lesson);

        const lessons = await lessonsRepository.find();

        return lessons;
    }
}

export default CreateUserService;