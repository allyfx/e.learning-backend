import { Request, Response } from 'express';

import CreateLessonService from '@modules/lesson/services/CreateLessonService';

export default {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, duration, course_id, description, video_id  } = request.body;

        const createLesson = new CreateLessonService();

        try {
            const lesson = await createLesson.execute({ name, duration, course_id, description, video_id  });

            return response.json(lesson);
        } catch {
            return response.status(400).json({ message: 'User does not exists.' });
        }
    }
}