import { CourseItem } from './course.interface';

export interface CoursesState {
  courses: CourseItem[];
  loading: boolean;
  loaded: boolean;
}
