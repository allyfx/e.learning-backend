import { Request, Response } from 'express';

import CreateCourseService from '../../../services/CreateCourseService';

export default {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, image } = request.body;
        const createCourse = new CreateCourseService();

        const course = await createCourse.execute({ name, image });

        return response.status(200).json(course);
    }
}