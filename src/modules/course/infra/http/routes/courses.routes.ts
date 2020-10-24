import { Router } from 'express';

import CoursesController from '../controllers/CoursesController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const courseRouter = Router();

courseRouter.use(ensureAuthenticated);

courseRouter.post('/course/create', CoursesController.create);

export default courseRouter;