import {
  Component
} from '@angular/core';

import { CourseService } from '../../core/services/course.service';
import { RoutesConfig } from '../../../../app-config/routes/routes.config';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
})
export class ToolboxComponent {
  private courseService: CourseService;
  public routesConfig = RoutesConfig;
  public courseName: string;

  constructor(courseService: CourseService) {
    this.courseService = courseService;
    this.courseName = '';
  }

  public onClickSearch (): void {
    this.courseService.serverCourseSearch(this.courseName.trim());
  }
}
