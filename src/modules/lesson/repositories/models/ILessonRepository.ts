import { ILesson } from "@modules/lesson/interfaces/ILesson";

export default interface ILessonRepository {
  listByCourse(courseId:string): Promise<ILesson[]>;
  getById(id: string): Promise<ILesson>
  create(data): Promise<ILesson> // adicionar DTO
}
