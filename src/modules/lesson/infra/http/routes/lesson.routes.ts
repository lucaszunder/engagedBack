import { Router } from 'express';
import LessonController from '../controllers/LessonController';
import multer from 'multer'
import uploadConfig from '../../../../../config/upload'

const upload = multer(uploadConfig.upload("./tmp"))
const lessonRoutes = Router();
const lessonController = new LessonController()

lessonRoutes.post('/', lessonController.create)
lessonRoutes.get('/all/:courseId', lessonController.listByCourse)
lessonRoutes.get('/:id', lessonController.getOne)

lessonRoutes.post('/:courseId', upload.array("files"), lessonController.create)

export default lessonRoutes;
