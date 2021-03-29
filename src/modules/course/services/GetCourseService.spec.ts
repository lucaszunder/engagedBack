import AppError from '@shared/errors/AppError';
import FakeCourseRepository from '../repositories/fakes/FakeCourseRepository';
import GetCourseService from './GetCourseService';

describe('GetCourse', () => {
  it('should be able to get one specific Course', async () => {
    const fakeCourseRepository = new FakeCourseRepository();
    const getOneCourse = new GetCourseService(fakeCourseRepository);

    const course = await getOneCourse.execute('teste');
    expect(course.id).toBe('teste')
  });

  it('should raise an error when the ids does not match an Course', async () => {
    const fakeCourseRepository = new FakeCourseRepository();
    const getOneCourse = new GetCourseService(fakeCourseRepository);
    
    expect(getOneCourse.execute('5')).rejects.toBeInstanceOf(AppError);
  });
});
