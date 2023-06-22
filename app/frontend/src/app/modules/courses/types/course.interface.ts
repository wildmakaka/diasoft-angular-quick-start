import { AuthorInterface } from 'src/app/modules/courses/types/author.interfact';

export interface CourseInterface {
  id: number;
  title: string;
  description: string;
  topRated: boolean;
  creationDate: Date;
  duration: number;
  authors: AuthorInterface[];
}
