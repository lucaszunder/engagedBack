import { CreateCourseDTO } from '@modules/course/dtos/CreateCourseDTO';
import { ICourse } from '@modules/course/interfaces/ICourse';
import { uuid } from 'uuidv4';

export default class FakeCourseRepository {
  private courses: ICourse[] = [
    {
      id: 'teste',
      name: 'curso de inglês',
      description: 'curso completo para o aprendizado da língua inglesa',
      createdAt: new Date(),
    },
  ];

  public async create(data: CreateCourseDTO): Promise<ICourse> {
    const { name, description } = data;
    const course = {
      id: uuid(),
      name: name,
      description: description,
      createdAt: new Date(),
    };
    this.courses.push(course);
    return course;
  }

  public async list(): Promise<ICourse[]> {
    return this.courses;
  }

  public async findById(id: string): Promise<ICourse | undefined> {
    const course = this.courses.find(course => course.id === id);

    return course;
  }

  public async findByName(name: string): Promise<ICourse | undefined> {
    const course = this.courses.find(course => course.name === name);

    return course;
  }
}
