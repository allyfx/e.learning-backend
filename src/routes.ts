import { Router } from 'express';

import usersRouter from './modules/user/infra/http/routes/user.routes';

const routes = Router();

routes.use(usersRouter);

export default routes;