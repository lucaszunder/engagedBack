import AppError from '@shared/errors/AppError';
import ICourseRepository from '../repositories/models/ICourseRepository';
import { ICourse } from '../interfaces/ICourse';
import { CreateCourseDTO } from '../dtos/CreateCourseDTO';

export default class CreateCourseService {
  constructor(private courseRepository: ICourseRepository) {}
  public async execute(data: CreateCourseDTO): Promise<ICourse> {
    const { name, description } = data;
    const checkCourseName = await this.courseRepository.findByName(name);

    if (!!checkCourseName) {
      throw new AppError('Já existe um curso com este nome!', 400);
    }

    const newCourse = await this.courseRepository.create({ name, description });

    return newCourse;
  }
}
