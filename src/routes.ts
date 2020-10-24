import { Router } from 'express';

import usersRouter from './modules/user/infra/http/routes/user.routes';
import coursesRouter from './modules/course/infra/http/routes/courses.routes';

const routes = Router();

routes.use(usersRouter);
routes.use(coursesRouter);

export default routes;