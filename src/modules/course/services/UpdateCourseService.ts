import { getRepository } from 'typeorm';

import Course from '../infra/typeorm/entities/Course';

interface Request {
    id: string;
    name?: string;
    image?: string;
}

class UpdateCourseService {
    public async execute({ id, name, image }: Request): Promise<Course> {
        const coursesRepository = getRepository(Course);

        const courseExists = await coursesRepository.findOne(id);

        if (!courseExists) {
            throw new Error('Course does not exists');
        }

        courseExists.name = name ? name : courseExists.name;
        courseExists.image = image ? image : courseExists.image;

        return await coursesRepository.save(courseExists);
    }
}

export default UpdateCourseService;