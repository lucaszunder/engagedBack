import AppError from '@shared/errors/AppError';
import ICourseRepository from '../repositories/models/ICourseRepository';
import { ICourse } from '../interfaces/ICourse';


export default class GetCourseService {
  constructor(private courseRepository: ICourseRepository) {}
  async execute(id: string): Promise<ICourse> {
    const course = await this.courseRepository.findById(id);

    if (!course) {
      throw new AppError('Não existe um curso com este id', 404);
    }

    return course;
  }
}
