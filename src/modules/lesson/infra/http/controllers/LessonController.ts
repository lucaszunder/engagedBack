import CreateLessonService from '@modules/lesson/services/CreateLessonService';
import GetLessonByIdService from '@modules/lesson/services/GetLessonByIdService';
import ListLessonByCourseService from '@modules/lesson/services/ListLessonByCourseService';
import { Request, Response } from 'express';
import LessonRepository from '../../prisma/LessonRepository';

export default class LessonController {
  public async create(request: Request, response: Response): Promise<Response> {
    const lessonRepository = new LessonRepository();
    const newLessonService = new CreateLessonService(lessonRepository)

    const {courseId} = request.params
    const {files} = request

    return response.json({message:'ok'});
  }

  public async listByCourse(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { courseId } = request.params;
    const lessonRepository = new LessonRepository();
    const listLessonsByCourse = new ListLessonByCourseService(lessonRepository);

    const lessons = await listLessonsByCourse.execute(courseId);
    return response.json(lessons);
  }

  public async getOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const lessonRepository = new LessonRepository();
    const getLessonById = new GetLessonByIdService(lessonRepository);

    const lesson = await getLessonById.execute(id);
    return response.json(lesson);
  }


}
