import { ILesson } from '@modules/lesson/interfaces/ILesson';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class LessonRepository {
  public async listByCourse(courseId): Promise<ILesson[]> {
    const course = await prisma.lesson
      .findMany({
        where: {
          courseId
        },
        include: {
          Course:true
        }
      })
      .catch(e => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {});
    return course;
  }
  
  public async getById(id: string): Promise<ILesson> {
    const course = await prisma.lesson
      .findUnique({
        where: {
          id,
        },
        include: {
          contents: true
        }
      })
      .catch(e => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {});

    return course;
  }

  public async create(
    data: CreateCourseDTO,
  ): Promise<ILesson> {
    const {name, description} = data
    const course = await prisma.course
      .create({
        data: {
          name ,
          description,
        },
      })
      .catch(e => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {});

    return course;
  }

  
}