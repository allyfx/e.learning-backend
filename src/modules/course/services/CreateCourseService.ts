import { getRepository } from 'typeorm';

import Course from '../infra/typeorm/entities/Course';

interface Request {
    name: string;
    image: string;
}

class CreateUserService {
    public async execute({ name, image }: Request): Promise<Course> {
        const coursesRepository = getRepository(Course);

        const course = coursesRepository.create({ name, image });

        await coursesRepository.save(course);

        return course;
    }
}

export default CreateUserService;