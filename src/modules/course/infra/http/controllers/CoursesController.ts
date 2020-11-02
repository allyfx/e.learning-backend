import { Request, Response } from 'express';

import CreateCourseService from '@modules/course/services/CreateCourseService';
import UpdateCourseService from '@modules/course/services/UpdateCourseService';
import ListCourseService from '@modules/course/services/ListCourseService';

export default {
    async create(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const createCourse = new CreateCourseService();

        const course = await createCourse.execute({ name, imageName: request.file.filename });

        return response.status(200).json(course);
    },

    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name } = request.body;

        const updateCourse = new UpdateCourseService();

        try {
            const course = await updateCourse.execute({ id, name, imageName: request.file.filename });

            return response.status(200).json(course);
        } catch (err) {
            console.log(err);
            return response.status(400).json({ message: 'Course does not exists' });
        }
    },

    async show(request: Request, response: Response): Promise<Response> {
        const listCourses = new ListCourseService();

        const res = await listCourses.execute();

        return response.status(200).json(res);
    }
}