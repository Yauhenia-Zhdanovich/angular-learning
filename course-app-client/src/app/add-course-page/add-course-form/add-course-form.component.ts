import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CourseService } from '../../core/services/course.service';
import { validateDate } from '../../core/validators/date-validator';
import { RoutesConfig } from '../../../../app-config/routes/routes.config';
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
  public courseForm: FormGroup;
  public routesConfig = RoutesConfig;

  @Input()
  public courseId: string;

  constructor(
    formBuilder: FormBuilder,
    courseService: CourseService
  ) {
    this.courseService = courseService;
    this.formBuilder = formBuilder;
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
    this.courseService.getSpecificCourse(id).subscribe((data: CourseData) => {
      this.courseForm.setValue({
        title: data.name,
        description: data.description,
        date: data.date,
        duration: data.length,
        authors: this.parseFetchedAuthors(data.authors)
      });
      console.log(this.courseForm.value);
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
    console.log('form was submitted');
  }

  public onCancel(): void {
    console.log('canceled');
  }
}
