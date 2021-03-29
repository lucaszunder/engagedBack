import AppError from '@shared/errors/AppError';
import FakeLessonRepository from '../repositories/fakes/FakeLessonRepository';
import ListLessonByCourseService from './ListLessonByCourseService';

describe('ListLessonByCourse', () => {
  it('should be able to list all lessons', async () => {
    const fakeLessonRepository = new FakeLessonRepository();
    const getLessonsByCourse = new ListLessonByCourseService(
      fakeLessonRepository,
    );

    const course = await getLessonsByCourse.execute('cursoteste123');
    expect(course.length).toBe(1);
  });
});
