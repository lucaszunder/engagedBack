import { ILesson } from '@modules/lesson/interfaces/ILesson';

export default class FakeLessonRepository {
  private lessons: ILesson[] = [
    {
      id: 'aulateste123',
      name: 'Aula 1',
      description: 'Primeira aula',
      order: 1,
      contents: [
        { id: 'conteúdo', title: '', name: '', size: 0, type: 'text' },
      ],
      course: {
        id: 'cursoteste123',
        name: 'curso de inglês',
        description: 'curso completo para o aprendizado da língua inglesa',
        createdAt: new Date(),
      },
      createdAt: new Date(),
    },
  ];

  public async listByCourse(courseId: string): Promise<ILesson[]> {
    const lesson = this.lessons.filter(lesson => lesson.course.id === courseId);

    return lesson;
  }

  public async getById(id: string): Promise<ILesson | undefined> {
    const lesson = this.lessons.find(lesson => lesson.id === id);

    return lesson;
  }
}
