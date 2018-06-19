import { CourseItem } from '../interfaces/course-interface';

export const COURSELIST: Array<CourseItem> = [
  {
    id: 1,
    title: 'Redux course',
    creatingDate: new Date('May 22, 2018'),
    duration: 20,
    description: 'studying front-end development, redux',
    topRated: true
  },
  {
    id: 2,
    title: 'Angular course',
    creatingDate: new Date('May 18, 2018'),
    duration: 120,
    description: 'studying front-end development',
    topRated: true
  },
  {
    id: 3,
    title: 'React course',
    creatingDate: new Date('April 29, 2018'),
    duration: 130,
    description: 'studying front-end development',
    topRated: false
  }
];
