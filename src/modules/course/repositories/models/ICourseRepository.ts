import { CreateCourseDTO } from '@modules/course/dtos/CreateCourseDTO';
import { ICourse } from '@modules/course/interfaces/ICourse';

export default interface ICourseRepository {
  list(): Promise<ICourse[]>;
  create(data: CreateCourseDTO): Promise<ICourse>;
  findById(id: string): Promise<ICourse>;
  findByName(name: string): Promise<ICourse | undefined>
}
