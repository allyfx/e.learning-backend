import { getRepository } from 'typeorm';

import Course from '../infra/typeorm/entities/Course';
import Lesson from '../../lesson/infra/typeorm/entities/Lesson';

class ListCourseService {
    public async execute(): Promise<Course[]> {
        const coursesRepository = getRepository(Course);
        const lessonsRepository = getRepository(Lesson);

        const courses = await coursesRepository.find();
        
        return courses;
    }
}

export default ListCourseService;