import { Author } from './author.interface';

export interface CourseData {
  authors: Array<Author>;
  date: Date;
  description: string;
  id: number;
  isTopRated: boolean;
  length: number;
  name: string;
}
