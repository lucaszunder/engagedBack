import { Router } from 'express';

import CourseController from '../controllers/CourseController';

const courseRoutes = Router();
const courseController = new CourseController();

courseRoutes.post('/', courseController.create)
courseRoutes.get('/', courseController.list)
courseRoutes.get('/:id', courseController.getOne)

export default courseRoutes;
