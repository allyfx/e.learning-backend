import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import CoursesController from '../controllers/CoursesController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const courseRouter = Router();
const upload = multer(uploadConfig);

courseRouter.get('/course/list', CoursesController.show);

courseRouter.post('/course/create', ensureAuthenticated, upload.single('image'), CoursesController.create);
courseRouter.put('/course/update/:id', ensureAuthenticated, CoursesController.update);

export default courseRouter;