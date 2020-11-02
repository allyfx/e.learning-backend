import { getRepository } from 'typeorm';

import Lesson from '../infra/typeorm/entities/Lesson';

class CreateUserService {
    public async execute(id: string): Promise<Lesson[]> {
        const lessonsRepository = getRepository(Lesson);

        const lessons = await lessonsRepository.find({ where: { course_id: id } });

        return lessons;
    }
}

export default CreateUserService;