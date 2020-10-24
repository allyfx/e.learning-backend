import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import SessionsController from '../controllers/SessionsController';

const usersRouter = Router();

const usersController = new UsersController();
const sessionsController = new SessionsController();

usersRouter.post('/user/create', usersController.create);
usersRouter.post('/user/authenticate', sessionsController.create);

export default usersRouter;