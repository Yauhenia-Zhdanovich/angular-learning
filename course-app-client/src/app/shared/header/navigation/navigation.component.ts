import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../../../core/services/course.service';
import { ROUTES_CONFIG } from '../../../../../app-config/routes/routes.config';
import { CourseData } from '../../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  private activatedRoute: ActivatedRoute;
  private courseService: CourseService;
  public isComponentShown: boolean;
  public routesConfig = ROUTES_CONFIG;
  public currentCourse: string;
  public getCourseName: Subscription;

  constructor(
    activatedRoute: ActivatedRoute,
    courseService: CourseService
  ) {
    this.activatedRoute = activatedRoute;
    this.courseService = courseService;
  }

  public ngOnInit(): void {    
    if (this.activatedRoute.routeConfig.path === this.routesConfig.coursesWithId) {
      const courseId: string | number = this.activatedRoute.snapshot.paramMap.get('id');
      this.isComponentShown = !!courseId;
      this.getCourseName = this.courseService.getSpecificCourse(courseId).subscribe((data: CourseData) => {
        this.currentCourse = data.name;
      });
    }
  }

  public ngOnDestroy(): void {
    if (this.getCourseName) {
      this.getCourseName.unsubscribe();
    }
  }
}
