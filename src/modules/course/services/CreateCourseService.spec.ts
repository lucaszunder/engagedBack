import AppError from '@shared/errors/AppError';
import FakeCourseRepository from '../repositories/fakes/FakeCourseRepository';
import CreateCourseService from './CreateCourseService';

describe('CreateCourse', () => {
  it('should be able to create a new Course', async () => {
    const fakeCourseRepository = new FakeCourseRepository();
    const createCourse = new CreateCourseService(fakeCourseRepository);

    const newCourse = await createCourse.execute({
      name: 'Curso História do Brasil',
      description: 'Este curso mostra toda a história do Brasil',
    });

    expect(newCourse.name).toBe('Curso História do Brasil');
  });
});
