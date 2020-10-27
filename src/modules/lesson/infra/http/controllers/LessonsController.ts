import { Request, Response } from 'express';

import CreateLessonService from '@modules/lesson/services/CreateLessonService';
import ListLessonsService from '@modules/lesson/services/ListLessonsService';

export default {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, duration, course_id, description, video_id  } = request.body;

        const createLesson = new CreateLessonService();

        try {
            const lesson = await createLesson.execute({ name, duration, course_id, description, video_id  });

            return response.json(lesson);
        } catch {
            return response.status(400).json({ message: 'Course does not exists.' });
        }
    },
    
    async show(request: Request, response: Response): Promise<Response> {
        const listLessons = new ListLessonsService();

        const lessons = await listLessons.execute();

        return response.status(200).json(lessons);
    }
}