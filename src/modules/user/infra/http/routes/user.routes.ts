import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import SessionsController from '../controllers/SessionsController';

const usersRouter = Router();

usersRouter.post('/user/create', UsersController.create);
usersRouter.post('/user/authenticate', SessionsController.create);

export default usersRouter;