import { ICourse } from '@modules/course/interfaces/ICourse';

export interface ILesson {
  id: string;
  name: string;
  description?: string;
  order: number;
  course: ICourse;
  createdAt: Date;
  contents: IContent[];
}

export interface IContent {
  id: string;
  title?: string;
  name: string;
  size: number;
  type: string;
  Lesson?: ILesson;
}
