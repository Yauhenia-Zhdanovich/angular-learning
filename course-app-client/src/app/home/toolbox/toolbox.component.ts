import {
  Component
} from '@angular/core';

import { CourseService } from '../../core/services/course.service';
import { ROUTES_CONFIG } from '../../../../app-config/routes/routes.config';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css'],
})
export class ToolboxComponent {
  private courseService: CourseService;
  public routesConfig = ROUTES_CONFIG;
  public courseName: string;

  constructor(courseService: CourseService) {
    this.courseService = courseService;
    this.courseName = '';
  }

  public onClickSearch (): void {
    this.courseService.onSearchAction(this.courseName.trim());
  }
}
