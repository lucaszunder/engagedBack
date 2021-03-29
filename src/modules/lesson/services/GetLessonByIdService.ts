import AppError from '@shared/errors/AppError';
import { ILesson } from '../interfaces/ILesson';
import ILessonRepository from '../repositories/models/ILessonRepository';

export default class GetLessonByIdService {
  constructor(private lessonRepository: ILessonRepository) {}
  async execute(id: string): Promise<ILesson> {
    const lesson = await this.lessonRepository.getById(id);

    if (!lesson) {
      throw new AppError('Não existe uma aula com este id', 404)
    }

    return lesson;
  }
}
