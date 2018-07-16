import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-from.component.css'],
})

export class AddCourseFormComponent {
  private formBuilder: FormBuilder;
  public courseDescriptionGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  public createForm(): void {
    this.courseDescriptionGroup = this.formBuilder.group({
      title: 'dd',
      description: 'aa'
    });
  }

  public onSave(): void {
    console.log('course saved');
  }

  public onCancel(): void {
    console.log('canceled');
  }
}
