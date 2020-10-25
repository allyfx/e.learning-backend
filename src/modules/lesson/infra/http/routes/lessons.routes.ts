import { Router } from 'express';

import LessonsController from '../controllers/LessonsController';

const lessonsRouter = Router();

lessonsRouter.post('/lesson/create', LessonsController.create);

export default lessonsRouter;