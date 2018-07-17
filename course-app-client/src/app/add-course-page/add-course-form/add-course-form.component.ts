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
    this.createForm();
  }

  public createForm(): void {
    this.courseDescriptionGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  public onSubmit(): void {
    console.log(this.courseDescriptionGroup.dirty);
  }

  public onSave(): void {
    console.log('course saved');
  }

  public onCancel(): void {
    console.log('canceled');
  }
}
