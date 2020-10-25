import { Router } from 'express';

import usersRouter from '@modules/user/infra/http/routes/user.routes';
import coursesRouter from '@modules/course/infra/http/routes/courses.routes';
import lessonsRouter from '@modules/lesson/infra/http/routes/lessons.routes';

const routes = Router();

routes.use(usersRouter);
routes.use(coursesRouter);
routes.use(lessonsRouter);

export default routes;