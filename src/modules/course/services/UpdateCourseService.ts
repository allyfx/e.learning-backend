import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import Course from '../infra/typeorm/entities/Course';

interface Request {
    id: string;
    name?: string;
    imageName?: string;
}

class UpdateCourseService {
    public async execute({ id, name, imageName }: Request): Promise<Course> {
        const coursesRepository = getRepository(Course);

        const courseExists = await coursesRepository.findOne(id);

        if (!courseExists) {
            throw new Error('Course does not exists');
        }

        if (courseExists.image) {
            const courseImageFilePath = path.join(
                path.join(__dirname, '..', '..', '..', '..', 'uploads'),
                courseExists.image,
            );

            const courseImageFileExists = await fs.promises.stat(courseImageFilePath);

            if (courseImageFileExists) {
                await fs.promises.unlink(courseImageFilePath);
            }
        }

        courseExists.name = name ? name : courseExists.name;
        courseExists.image = imageName ? imageName : courseExists.image;
        courseExists.updated_at = new Date(Date.now());

        return await coursesRepository.save(courseExists);
    }
}

export default UpdateCourseService;