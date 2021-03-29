import AppError from '@shared/errors/AppError';
import { ILesson } from '../interfaces/ILesson';
import ILessonRepository from '../repositories/models/ILessonRepository';

export default class CreateLessonService {
  constructor(private lessonRepository: ILessonRepository) {}
  async execute(data): Promise<any> {
   
    return true;
  }
}
