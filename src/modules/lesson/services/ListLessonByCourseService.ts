import AppError from '@shared/errors/AppError';
import { ILesson } from '../interfaces/ILesson';
import ILessonRepository from '../repositories/models/ILessonRepository';

export default class ListLessonByCourseService {
  constructor(private lessonRepository: ILessonRepository) {}
  async execute(courseId: string): Promise<ILesson[]> {
    const lesson = await this.lessonRepository.listByCourse(courseId);

    if (!lesson) {
      throw new AppError('Não existe aulas para este curso', 404)
    }

    return lesson;
  }
}
