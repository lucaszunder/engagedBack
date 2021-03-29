import courseRoutes from '@modules/course/infra/http/routes/course.routes';
import lessonRoutes from '@modules/lesson/infra/http/routes/lesson.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/courses', courseRoutes);
routes.use('/lessons', lessonRoutes);

export default routes;
