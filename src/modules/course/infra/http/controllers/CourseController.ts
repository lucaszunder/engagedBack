import CreateCourseService from '@modules/course/services/CreateCourseService';
import GetCourseService from '@modules/course/services/GetCourseService';
import ListCoursesService from '@modules/course/services/ListCoursesService';
import { Request, Response } from 'express';
import CourseRepository from '../../prisma/repositories/CourseRepository';

export default class CourseController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, description } = request.body;
    
    const courseRepository = new CourseRepository();
    const createCourseService = new CreateCourseService(courseRepository);

    const newCourse = await createCourseService.execute({name, description});

    return response.json(newCourse);
  }

  public async list(
    request: Request,
    response: Response,
  ): Promise<Response> {    
    const courseRepository = new CourseRepository();
    const listCoursesService = new ListCoursesService(courseRepository);

    const Courses = await listCoursesService.execute();

    return response.json(Courses);
  }

  public async getOne(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    
    const courseRepository = new CourseRepository();
    const getCourseService = new GetCourseService(courseRepository);

    const Course = await getCourseService.execute(id);

    return response.json(Course);
  }
}
