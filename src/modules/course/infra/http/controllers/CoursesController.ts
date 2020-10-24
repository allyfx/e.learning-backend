import { Request, Response } from 'express';

import CreateCourseService from '@modules/course/services/CreateCourseService';
import UpdateCourseService from '@modules/course/services/UpdateCourseService';

export default {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, image } = request.body;
        const createCourse = new CreateCourseService();

        const course = await createCourse.execute({ name, image });

        return response.status(200).json(course);
    },

    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, image } = request.body;

        const updateCourse = new UpdateCourseService();

        try {
            const course = await updateCourse.execute({ id, name, image });

            return response.status(200).json(course);
        } catch {
            return response.status(400).json({ message: 'Course does not exists' });
        }
    }
}