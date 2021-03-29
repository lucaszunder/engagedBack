import AppError from '@shared/errors/AppError';
import FakeLessonRepository from '../repositories/fakes/FakeLessonRepository';
import GetLessonByIdService from './GetLessonByIdService';

describe('GetLessonById', () => {
  it('should be able to get one specific Lesson', async () => {
    const fakeLessonRepository = new FakeLessonRepository();
    const getOneCourse = new GetLessonByIdService(fakeLessonRepository);

    const course = await getOneCourse.execute('aulateste123');
    expect(course.id).toBe('aulateste123');
  });

  it('should raise error when the specific is wrong', async () => {
    const fakeLessonRepository = new FakeLessonRepository();
    const getOneCourse = new GetLessonByIdService(fakeLessonRepository);

    expect(getOneCourse.execute('aulateste321')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
