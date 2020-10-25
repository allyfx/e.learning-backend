import { Router } from 'express';

import CoursesController from '../controllers/CoursesController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const courseRouter = Router();

courseRouter.get('/course/list', CoursesController.show);

courseRouter.use(ensureAuthenticated);
courseRouter.post('/course/create', CoursesController.create);
courseRouter.put('/course/update/:id', CoursesController.update);

export default courseRouter;