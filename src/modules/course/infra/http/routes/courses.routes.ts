import { Router } from 'express';

import CoursesController from '../controllers/CoursesController';

const courseRouter = Router();

courseRouter.post('/course/create', CoursesController.create);

export default courseRouter;