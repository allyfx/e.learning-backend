import { getRepository } from 'typeorm';

import Course from '../infra/typeorm/entities/Course';

interface Request {
    name: string;
    imageName: string;
}

class CreateUserService {
    public async execute({ name, imageName }: Request): Promise<Course> {
        const coursesRepository = getRepository(Course);

        const course = coursesRepository.create({ name, image: imageName });

        await coursesRepository.save(course);

        return course;
    }
}

export default CreateUserService;