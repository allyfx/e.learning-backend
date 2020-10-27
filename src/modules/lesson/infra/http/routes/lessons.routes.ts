import { Router } from 'express';

import LessonsController from '../controllers/LessonsController';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const lessonsRouter = Router();

lessonsRouter.get('/lesson/list', LessonsController.show);
lessonsRouter.post('/lesson/create', ensureAuthenticated, LessonsController.create);

export default lessonsRouter;