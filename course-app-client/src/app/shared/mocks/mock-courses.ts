import { CourseItem } from '../interfaces/course.interface';

export const COURSELIST: Array<CourseItem> = [
  {
    id: 1,
    title: 'Redux course',
    date: new Date('May 29, 2018'),
    duration: 20,
    description: 'studying front-end development, redux',
    topRated: true
  },
  {
    id: 2,
    title: 'Angular course',
    date: new Date('May 24, 2018'),
    duration: 120,
    description: 'studying front-end development',
    topRated: true
  },
  {
    id: 3,
    title: 'React course',
    date: new Date('April 29, 2018'),
    duration: 130,
    description: 'studying front-end development',
    topRated: false
  }
];
