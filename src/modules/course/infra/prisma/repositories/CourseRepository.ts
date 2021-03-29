import { CreateCourseDTO } from '@modules/course/dtos/CreateCourseDTO';
import { ICourse } from '@modules/course/interfaces/ICourse';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CourseRepository {
  public async list(): Promise<ICourse[]> {
    const course = await prisma.course
      .findMany({
        orderBy: {
          createdAt: 'asc'
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
  ): Promise<ICourse> {
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

  public async findById(id: string): Promise<ICourse> {
    const course = await prisma.course
      .findUnique({
        where: {
          id,
        },
      })
      .catch(e => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {});

    return course;
  }

  public async findByName(name: string): Promise<ICourse> {
    const course = await prisma.course
      .findUnique({
        where: {
          name,
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


export default CourseRepository;
