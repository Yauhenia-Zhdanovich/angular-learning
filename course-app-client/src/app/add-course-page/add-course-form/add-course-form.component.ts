import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseService } from '../../core/services/course.service';
import { validateDate } from '../../core/validators/date-validator';
import { ROUTES_CONFIG } from '../../../../app-config/routes/routes.config';
import { CourseData } from '../../shared/interfaces/course-data.interface';

@Component({
  selector: 'add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-from.component.css'],
})
export class AddCourseFormComponent implements OnInit {
  private formBuilder: FormBuilder;
  private courseService: CourseService;
  private currentTitle: string = '';
  private router: Router;
  public courseForm: FormGroup;
  public routesConfig = ROUTES_CONFIG;

  @Input()
  public courseId: string;

  constructor(
    formBuilder: FormBuilder,
    courseService: CourseService,
    router: Router
  ) {
    this.courseService = courseService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.createForm();
  }

  private createForm(): void {
    this.courseForm = this.formBuilder.group({
      title: [this.currentTitle, [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required, validateDate]],
      duration: [undefined, [Validators.required, Validators.pattern('[0-9]*$')]],
      authors: [undefined, Validators.required]
    });
  }

  private loadCourseData(id: string): void {
    this.courseService.getSpecificCourse(id).subscribe(
      (data: CourseData) => {
        this.courseForm.setValue({
        title: data.name,
        description: data.description,
        date: data.date,
        duration: data.length,
        authors: this.parseFetchedAuthors(data.authors)
      });
    },
      (err: Error) => {
      this.router.navigate([this.routesConfig.notFound]);
    });
  }

  private parseFetchedAuthors(data: any): any {
    return data.map(element => {
      return `${element.firstName} ${element.lastName}`;
    });
  }

  public ngOnInit(): void {
    if (this.courseId) {
      this.loadCourseData(this.courseId);
    }
  }

  public onSubmit(): void {
    console.log('form was submitted', this.courseForm.value);
    this.router.navigate([this.routesConfig.homeRelativePath]);
  }
}
