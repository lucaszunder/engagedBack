import AppError from '@shared/errors/AppError';
import FakeCourseRepository from '../repositories/fakes/FakeCourseRepository';
import ListCoursesService from './ListCoursesService';

describe('ListCourses', () => {
  it('should be able to list all courses', async () => {
    const fakeCourseRepository = new FakeCourseRepository();
    const getAllCourses = new ListCoursesService(fakeCourseRepository);

    const courses = await getAllCourses.execute();

    expect(courses.length).toBe(1)
  });

});
