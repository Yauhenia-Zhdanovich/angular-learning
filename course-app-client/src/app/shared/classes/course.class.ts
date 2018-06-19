import { CourseItem } from '../interfaces/course.interface';

export class Course implements CourseItem {
  public id: number;
  public title: string;
  public date: Date;
  public duration: number;
  public description: string;
  public topRated: boolean;
  constructor(
    id: number,
    title: string,
    date: Date,
    duration: number,
    description: string,
    topRated: boolean
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.duration = duration;
    this.description = description;
    this.topRated = topRated;
  }
}
