import AppError from '@shared/errors/AppError';

import ICourseRepository from '../repositories/models/ICourseRepository';
import { ICourse } from '../interfaces/ICourse';


export default class ListCoursesService {
  constructor(private courseRepository: ICourseRepository) {}
  async execute(): Promise<ICourse[]> {
    const courses = await this.courseRepository.list();

    return courses;
  }
}
