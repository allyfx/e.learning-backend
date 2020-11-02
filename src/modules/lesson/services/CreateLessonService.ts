import { getRepository } from 'typeorm';

import Lesson from '../infra/typeorm/entities/Lesson';
import Course from '@modules/course/infra/typeorm/entities/Course';

interface Request {
    name: string;
    duration: number;
    count: number;
    course_id: string;
    description: string;
    video_id: string;
}

class CreateLessonService {
    public async execute({ name, duration, count, course_id, description, video_id }: Request): Promise<Lesson> {
        const lessonsRepository = getRepository(Lesson);
        const coursesRepository = getRepository(Course);

        const courseExists = await coursesRepository.findOne(course_id);

        if (!courseExists) {
            throw new Error('Course does not exists.');
        }

        const lesson = lessonsRepository.create({ name, duration, count, course_id, description, video_id });

        if (!lesson) {
            throw new Error('Lesson count already is set.');
        }

        await lessonsRepository.save(lesson);
        
        courseExists.lessons = courseExists.lessons ? courseExists.lessons += 1 : 1;

        await coursesRepository.save(courseExists);
        
        return lesson;
    }
}

export default CreateLessonService;