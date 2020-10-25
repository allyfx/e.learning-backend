import { getRepository } from 'typeorm';

import Course from '../infra/typeorm/entities/Course';

class ListCourseService {
    public async execute(): Promise<Course[]> {
        const coursesRepository = getRepository(Course);

        const courses = await coursesRepository.find();

        return courses;
    }
}

export default ListCourseService;